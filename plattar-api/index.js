const got = require('got');

'use strict';
class Plattar {
    constructor() {
        this._authToken = undefined;
        this._serverLocation = undefined;
    }

    get server() {
        return {
            prod: 'https://app.plattar.com/api/v2/',
            staging: 'https://staging.plattar.space/api/v2/',
            dev: 'https://localhost/api/v2/'
        };
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
            const server = this.originLocation;

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

            const validate = server + 'plattaruser/xauth/validate';

            const options = {
                headers: {
                    'plattar-auth-token': token
                }
            };

            got.get(validate, options).then((response) => {
                this._authToken = {
                    'plattar-auth-token': token
                };

                resolve(this);
            }).catch((error) => {
                reject(new Error('Plattar.auth(token) - failed to validate authentication token at ' + validate));
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

            const ping = server + 'ping';

            got.get(ping).then((response) => {
                this._serverLocation = server;

                resolve(this);
            }).catch((error) => {
                reject(new Error('Plattar.origin(server) - failed to ping server at ' + ping));
            });
        });
    }
}

module.exports = new Plattar();