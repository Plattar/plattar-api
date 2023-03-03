const fetch = require("node-fetch");

class PlattarServer {
    constructor() {
        this._authToken = {};
        this._serverLocation = this.prod;
    }

    get prod() {
        return PlattarServer.match("prod");
    }

    get isProd() {
        return this._serverLocation.type === "production";
    }

    get staging() {
        return PlattarServer.match("staging");
    }

    get isStaging() {
        return this._serverLocation.type === "staging";
    }

    get dev() {
        return PlattarServer.match("dev");
    }

    get isDev() {
        return this._serverLocation.type === "dev";
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
            const server = this.originLocation.api_write;

            if (!server) {
                reject(new Error("Plattar.auth(token) - cannot authenticate as server not set via Plattar.origin(server)"));
                return;
            }

            if (!token) {
                reject(new Error("Plattar.auth(token) - token variable is undefined"));
                return;
            }

            if (!copt.validate) {
                this._authToken = {
                    "plattar-auth-token": token
                };

                resolve(this);
                return;
            }

            const endpoint = server + "plattaruser/xauth/validate";

            const options = {
                method: "GET",
                headers: {
                    "plattar-auth-token": token
                }
            };

            fetch(endpoint, options).then((res) => {
                if (res.ok) {
                    this._authToken = {
                        "plattar-auth-token": token
                    };

                    resolve(this);
                }
                else {
                    reject(new Error("Plattar.auth(token) - failed to validate authentication token at " + endpoint));
                }
            });
        });
    }

    origin(server, opt) {
        const copt = opt || { validate: false };

        return new Promise((resolve, reject) => {
            if (!server) {
                reject(new Error("Plattar.origin(server) - server variable is undefined"));
                return;
            }

            if (!copt.validate) {
                this._serverLocation = server;

                resolve(this);
                return;
            }

            const endpoint = server.api_read + "ping";

            const options = {
                method: "GET"
            };

            fetch(endpoint, options).then((res) => {
                if (res.ok) {
                    this._serverLocation = server;

                    resolve(this);
                }
                else {
                    reject(new Error("Plattar.origin(server) - failed to ping server at " + endpoint));
                }
            });
        });
    }
}

/**
 * Matches the provided server name with a provided environment
 */
PlattarServer.match = (serverName) => {
    switch (serverName.toLowerCase()) {
        case "staging.plattar.space":
        case "cdn-staging.plattar.space":
        case "staging":
            return {
                base: "https://staging.plattar.space/",
                api_read: "https://api.plattar.space/v3/",
                api_write: "https://api.plattar.space/v3/",
                cdn: "https://cdn-staging.plattar.space/",
                cdn_image: "https://images.plattar.space/",
                analytics: "https://c.plattar.space/api/v2/analytics",
                type: "staging"
            }
        case "app.plattar.com":
        case "cdn.plattar.com":
        case "prod":
        case "production":
            return {
                base: "https://app.plattar.com/",
                api_read: "https://app.plattar.com/api/v2/",
                api_write: "https://cms.plattar.com/api/v2/",
                cdn: "https://cdn.plattar.com/",
                cdn_image: "https://images.plattar.com/",
                analytics: "https://c.plattar.space/api/v2/analytics",
                type: "production"
            }
        case "dev":
        case "developer":
        case "development":
        case "local":
        case "localhost":
        default:
            return {
                base: "https://localhost/",
                api_read: "https://localhost/api/v2/",
                api_write: "https://localhost/api/v2/",
                cdn: "https://cdn-dev.plattar.space/",
                cdn_image: "https://images-dev.plattar.space/'",
                analytics: "https://localhost:3000/api/v2/analytics/",
                type: "dev"
            }
    }
};

PlattarServer.create = (origin, auth) => {
    const newServer = new PlattarServer();

    if (origin) {
        newServer.origin(origin);
    }

    if (auth) {
        newServer.auth(auth);
    }

    PlattarServer._default = newServer;

    return newServer;
};

PlattarServer.disableTLS = () => {
    process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
};

PlattarServer.default = () => {
    return PlattarServer._default;
};

PlattarServer.location = () => {
    return PlattarServer.default().originLocation;
};

module.exports = PlattarServer;