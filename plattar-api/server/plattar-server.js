const fetch = require('node-fetch');

'use strict';
class PlattarServer {

    /**
     * We keep and maintain a default server
     * for quick access
     */
    static _default = undefined;

    static create(origin, auth) {
        const newServer = new PlattarServer();

        if (origin) {
            newServer.origin(origin);
        }

        if (auth) {
            newServer.auth(auth);
        }

        PlattarServer._default = newServer;

        return newServer;
    }

    static default() {
        return PlattarServer._default;
    }

    constructor() {
        this._authToken = {};
        this._serverLocation = this.prod;
    }

    get prod() {
        return {
            api: 'https://app.plattar.com/api/v2/',
            cdn: 'https://cdn.plattar.com/'
        }
    }

    get staging() {
        return {
            api: 'https://staging.plattar.space/api/v2/',
            cdn: 'https://cdn-staging.plattar.space/'
        }
    }

    get dev() {
        return {
            api: 'https://localhost/api/v2/',
            cdn: 'https://cdn-dev.plattar.space/'
        }
    }

    get authToken() {
        return this._authToken;
    }

    get originLocation() {
        return this._serverLocation;
    }

    auth(token, opt) {
        const copt = opt || { validate: false };

        return new Promise((resolve, reject) => {
            const server = this.originLocation.api;

            if (!server) {
                reject(new Error('Plattar.auth(token) - cannot authenticate as server not set via Plattar.origin(server)'));
                return;
            }

            if (!token) {
                reject(new Error('Plattar.auth(token) - token variable is undefined'));
                return;
            }

            if (!copt.validate) {
                this._authToken = {
                    'plattar-auth-token': token
                };

                resolve(this);
                return;
            }

            const endpoint = server + 'plattaruser/xauth/validate';

            const options = {
                method: 'GET',
                headers: {
                    'plattar-auth-token': token
                }
            };

            fetch(endpoint, options).then((res) => {
                if (res.ok) {
                    this._authToken = {
                        'plattar-auth-token': token
                    };

                    resolve(this);
                }
                else {
                    reject(new Error('Plattar.auth(token) - failed to validate authentication token at ' + endpoint));
                }
            });
        });
    }

    origin(server, opt) {
        const copt = opt || { validate: false };

        return new Promise((resolve, reject) => {
            if (!server) {
                reject(new Error('Plattar.origin(server) - server variable is undefined'));
                return;
            }

            if (!copt.validate) {
                this._serverLocation = server;

                resolve(this);
                return;
            }

            const endpoint = server.api + 'ping';

            const options = {
                method: 'GET'
            };

            fetch(endpoint, options).then((res) => {
                if (res.ok) {
                    this._serverLocation = server;

                    resolve(this);
                }
                else {
                    reject(new Error('Plattar.origin(server) - failed to ping server at ' + endpoint));
                }
            });
        });
    }
}

module.exports = PlattarServer;