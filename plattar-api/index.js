const got = require('got');

'use strict';
class Plattar {
    constructor() {
        this.authToken = undefined;
        this.serverLocation = undefined;
    }

    static get server() {
        const servers = {
            production: 'https://app.plattar.com/api/v2/',
            staging: 'https://staging.plattar.space/api/v2/'
        };

        return servers;
    }

    get auth() {
        return this.authToken;
    }

    get origin() {
        return this.serverLocation;
    }

    auth(token, opt) {
        const opt = opt || { validate: false };

        const promise = new Promise((resolve, reject) => {
            const server = this.serverLocation;

            if (!server) {
                reject(new Error('Plattar.auth(token) - cannot authenticate as server not set via Plattar.origin(server)'));
                return;
            }

            if (!token) {
                reject(new Error('Plattar.auth(token) - token variable is undefined'));
                return;
            }

            if (!opt.validate) {
                this.authToken = token;

                resolve(this);
                return;
            }

            const validate = server + 'plattaruser/validate';

            const options = {
                json: true,
                headers: {
                    'plattar-auth-token': token
                }
            };

            got(validate, options).then((response) => {
                this.authToken = token;

                resolve(this);
            }).catch((error) => {
                reject(new Error('Plattar.auth(token) - failed to validate authentication token at ' + validate));
            });
        });

        return promise;
    }

    origin(server, opt) {
        const opt = opt || { validate: false };

        const promise = new Promise((resolve, reject) => {
            if (!server) {
                reject(new Error('Plattar.origin(server) - server variable is undefined'));
                return;
            }

            if (!opt.validate) {
                this.serverLocation = server;

                resolve(this);
                return;
            }

            const ping = server + 'ping';

            const options = {
                json: true
            };

            got(ping, options).then((response) => {
                this.serverLocation = server;

                resolve(this);
            }).catch((error) => {
                reject(new Error('Plattar.origin(server) - failed to ping server at ' + ping));
            });
        });

        return promise;
    }
}

module.exports = Plattar;