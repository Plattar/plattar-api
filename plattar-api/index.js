const got = require('got');

'use strict';
class Plattar {
    constructor() {
        this.authToken = undefined;
        this.serverLocation = undefined;
    }

    static get server() {
        return {
            production: 'https://app.plattar.com/api/v2/',
            staging: 'https://staging.plattar.space/api/v2/',
            dev: 'https://localhost/api/v2/'
        };
    }

    get auth() {
        return this.authToken;
    }

    get origin() {
        return this.serverLocation;
    }

    auth(token, opt) {
        const opt = opt || { validate: false };

        return new Promise((resolve, reject) => {
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
                this.authToken = {
                    'plattar-auth-token': token
                };

                resolve(this);
                return;
            }

            const validate = server + 'plattaruser/xauth/validate';

            const options = {
                json: true,
                headers: {
                    'plattar-auth-token': token
                }
            };

            got(validate, options).then((response) => {
                this.authToken = {
                    'plattar-auth-token': token
                };

                resolve(this);
            }).catch((error) => {
                reject(new Error('Plattar.auth(token) - failed to validate authentication token at ' + validate));
            });
        });
    }

    origin(server, opt) {
        const opt = opt || { validate: false };

        return new Promise((resolve, reject) => {
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
    }
}

module.exports = Plattar;