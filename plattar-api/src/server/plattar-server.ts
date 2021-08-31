import fetch from "node-fetch";

export interface ServerDetails {
    base: string;
    api_read: string;
    api_write: string;
    cdn: string;
    cdn_image: string;
    analytics: string;
    type: "staging" | "production" | "dev"
}

export interface ServerAuth {
    plattar_auth_token: string | null;
}

export interface ServerOptions {
    validate: boolean;
}

export class PlattarServer {
    private static _default: PlattarServer | null = null;

    private readonly _authToken: ServerAuth;
    private _serverLocation: ServerDetails;

    constructor() {
        this._authToken = { plattar_auth_token: null };
        this._serverLocation = PlattarServer.prod;
    }

    public get isProd(): boolean {
        return this._serverLocation.type === "production";
    }

    public get isStaging(): boolean {
        return this._serverLocation.type === "staging";
    }

    public get isDev(): boolean {
        return this._serverLocation.type === "dev";
    }

    public get authToken(): ServerAuth {
        return this._authToken;
    }

    public get originLocation(): ServerDetails {
        return this._serverLocation;
    }

    auth(token: string, opt: ServerOptions | undefined | null = null): Promise<PlattarServer> {
        const copt: ServerOptions = opt || { validate: false };

        return new Promise<PlattarServer>((resolve, reject) => {
            const server: string = this.originLocation.api_write;

            if (!token) {
                return reject(new Error("PlattarServer.auth(token, options) - token variable is undefined"));
            }

            if (!copt.validate) {
                this._authToken.plattar_auth_token = token;

                return resolve(this);
            }

            const endpoint: string = server + "plattaruser/xauth/validate";

            const options = {
                method: "GET",
                headers: {
                    "plattar-auth-token": token
                }
            };

            fetch(endpoint, options).then((res) => {
                if (res.ok) {
                    this._authToken.plattar_auth_token = token;

                    resolve(this);
                }
                else {
                    reject(new Error("PlattarServer.auth(token) - failed to validate authentication token at " + endpoint));
                }
            });
        });
    }

    public static match(serverName: string): ServerDetails {
        switch (serverName.toLowerCase()) {
            case "staging.plattar.space":
            case "cdn-staging.plattar.space":
            case "staging":
                return {
                    base: "https://staging.plattar.space/",
                    api_read: "https://staging.plattar.space/api/v2/",
                    api_write: "https://cms.plattar.space/api/v2/",
                    cdn: "https://cdn-staging.plattar.space/",
                    cdn_image: "http://plattar-staging.s3-website-ap-southeast-2.amazonaws.com/",
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
                    cdn_image: "http://plattar-production.s3-website-ap-southeast-2.amazonaws.com/",
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
                    cdn_image: "http://plattar-dev.s3-website-ap-southeast-2.amazonaws.com/",
                    analytics: "https://localhost:3000/api/v2/analytics/",
                    type: "dev"
                }
        }
    }

    public origin(server: ServerDetails, opt: ServerOptions | undefined | null = null): Promise<PlattarServer> {
        const copt: ServerOptions = opt || { validate: false };

        return new Promise((resolve, reject) => {
            if (!server) {
                return reject(new Error("PlattarServer.origin(server) - server variable is undefined"));
            }

            if (!copt.validate) {
                this._serverLocation = server;

                return resolve(this);
            }

            const endpoint: string = server.api_read + "ping";

            const options = {
                method: "GET"
            };

            fetch(endpoint, options).then((res) => {
                if (res.ok) {
                    this._serverLocation = server;

                    resolve(this);
                }
                else {
                    reject(new Error("PlattarServer.origin(server) - failed to ping server at " + endpoint));
                }
            });
        });
    }

    public static get prod(): ServerDetails {
        return PlattarServer.match("prod");
    }

    public static get staging(): ServerDetails {
        return PlattarServer.match("staging");
    }

    public static get dev(): ServerDetails {
        return PlattarServer.match("dev");
    }

    public static create(origin: ServerDetails, auth: string | undefined | null = null): PlattarServer {
        const newServer: PlattarServer = new PlattarServer();

        if (origin) {
            newServer.origin(origin);
        }

        if (auth) {
            newServer.auth(auth);
        }

        PlattarServer._default = newServer;

        return newServer;
    };

    public static disableTLS(): void {
        if (process && process.env) {
            process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
        }
    };

    public static default(): PlattarServer {
        if (!PlattarServer._default) {
            throw new Error("PlattarServer.default() - Server instance is not defined");
        }

        return PlattarServer._default;
    }

    public static location(): ServerDetails {
        return PlattarServer.default().originLocation;
    };
}