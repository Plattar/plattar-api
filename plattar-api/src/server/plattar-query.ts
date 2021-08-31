import { PlattarObject } from "./plattar-object";
import { PlattarServer, ServerAuth } from "./plattar-server";

export interface QueryOptions {
    cache: boolean;
}

export interface QueryParameter {
    key: string;
    value: string;
    type: string;
}

export class PlattarQuery {

    private readonly _target: PlattarObject;
    private readonly _server: PlattarServer;
    private readonly _params: Array<QueryParameter>;
    private readonly _getIncludeQuery: Array<string>;

    constructor(target: PlattarObject, server: PlattarServer | undefined | null = null) {
        this._target = target;
        this._server = server || PlattarServer.default();
        this._params = new Array<QueryParameter>();
        this._getIncludeQuery = new Array<string>();
    }

    public get target() {
        return this._target;
    }

    public get server(): PlattarServer {
        return this._server;
    }

    public addParameter(key: string, value: string, type: string | undefined | null = null): void {
        const ctype: string = type || "all";

        this._params.push({
            key: key,
            value: value,
            type: ctype.toLowerCase()
        });
    }

    public get(opt: QueryOptions | undefined | null = null): Promise<PlattarObject> {
        return new Promise((resolve, reject) => {
            const target: PlattarObject = this.target;
            const server: PlattarServer = this.server;

            // we cannot perform a GET request without an ID
            if (!target.id) {
                return reject(new Error("PlattarQuery." + target.type + ".get() - object id is missing"));
            }

            const options: QueryOptions = opt || { cache: true };

            // otherwise, proceed with the fetching op
            const origin: string = server.originLocation.api_read;
            const auth: ServerAuth = server.authToken;

            const reqopts: RequestInit = {
                method: "GET"
            };

            if (auth && auth.plattar_auth_token) {
                reqopts.headers = {
                    "plattar-auth-token": auth.plattar_auth_token
                };
            }

            const includeQuery: string | null = this._IncludeQuery();
            const params: Array<QueryParameter> | null = this._ParamFor("get");

            let endpoint: string = origin + target.type + "/" + target.id;

            if (includeQuery) {
                endpoint = endpoint + "?include=" + includeQuery;
            }

            if (params) {
                let appender: string = includeQuery ? "&" : "?";

                params.forEach((param: QueryParameter) => {
                    endpoint = endpoint + appender + param.key + "=" + param.value;

                    appender = "&";
                });
            }

            fetch(endpoint, reqopts)
                .then((res) => {
                    if (res.ok) {
                        try {
                            return res.json();
                        }
                        catch (err) {
                            return new Error("PlattarQuery." + target.type + ".get(" + target.id + ") - critical error occured, cannot proceed");
                        }
                    }

                    return new Error("PlattarQuery." + target.type + ".get(" + target.id + ") - unexpected error occured, cannot proceed. error message is " + res.statusText);
                })
                .then((json) => {
                    if (json instanceof Error) {
                        reject(json);
                    }
                    else {
                        const PlattarUtil = require("../util/plattar-util.js");

                        PlattarUtil.reconstruct(target, json, options);

                        resolve(target);
                    }
                });
        });
    }

    public update(): Promise<PlattarObject> {
        return new Promise<PlattarObject>((resolve, reject) => {
            const target: PlattarObject = this.target;
            const server: PlattarServer = this.server;

            // we cannot perform a GET request without an ID
            if (!target.id) {
                return reject(new Error("PlattarQuery." + target.type + ".get() - object id is missing"));
            }

            // otherwise, proceed with the fetching op
            const origin: string = server.originLocation.api_write;
            const auth: ServerAuth = server.authToken;

            const headers: any = {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            };

            if (auth && auth.plattar_auth_token) {
                headers["plattar-auth-token"] = auth.plattar_auth_token;
            }

            const reqopts = {
                method: "PATCH",
                headers: headers,
                body: JSON.stringify(
                    {
                        data: {
                            id: target.id,
                            attributes: target.attributes
                        },
                        meta: target.meta || {}
                    }
                )
            };

            const params: Array<QueryParameter> | null = this._ParamFor("update");

            let endpoint: string = origin + target.type + "/" + target.id;

            if (params) {
                let appender = "?";

                params.forEach((param: QueryParameter) => {
                    endpoint = endpoint + appender + param.key + "=" + param.value;

                    appender = "&";
                });
            }

            fetch(endpoint, reqopts)
                .then((res) => {
                    if (res.ok) {
                        try {
                            return res.json();
                        }
                        catch (err) {
                            return new Error("PlattarQuery." + target.type + ".update(" + target.id + ") - critical error occured, cannot proceed");
                        }
                    }

                    return new Error("PlattarQuery." + target.type + ".update(" + target.id + ") - unexpected error occured, cannot proceed. error message is " + res.statusText);
                })
                .then((json) => {
                    if (json instanceof Error) {
                        reject(json);
                    }
                    else {
                        if (json.data) {
                            const PlattarUtil = require("../util/plattar-util.js");

                            PlattarUtil.reconstruct(target, json, { cache: true });
                        }

                        resolve(target);
                    }
                });
        });
    }

    public create() {
        return new Promise((resolve, reject) => {
            reject(new Error("PlattarQuery." + this.target.type + ".create() - not implemented"));
        });
    }

    public delete() {
        return new Promise((resolve, reject) => {
            reject(new Error("PlattarQuery." + this.target.type + ".delete(" + this.target.id + ") - not implemented"));
        });
    }

    public include(args: Array<any>): this {
        if (!args || args.length <= 0) {
            return this;
        }

        args.forEach((obj: any) => {
            // object passed is of PlattarObject type
            if (Array.isArray(obj)) {
                obj.forEach((strObject: any) => {
                    if (typeof strObject === "string" || strObject instanceof String) {
                        this._getIncludeQuery.push(<string>strObject);
                    }
                    else {
                        throw new Error("PlattarQuery." + this.target.type + ".include(...args) - argument of Array must only include Strings");
                    }
                });
            }
            else if (PlattarObject.isPlattarObject(obj)) {
                const pobj: PlattarObject = <PlattarObject>obj;
                const type: string | Array<string> = pobj.type;

                if (Array.isArray(type)) {
                    this.include(type);
                }
                else {
                    this._getIncludeQuery.push(type);
                }
            }
            else {
                throw new Error("PlattarQuery." + this.target.type + ".include(...args) - argument must be of type PlattarObject or Array but was type=" + (typeof obj) + " value=" + obj);
            }
        });

        return this;
    }

    private _ParamFor(type: string | undefined | null = null): Array<QueryParameter> | null {
        const ctype: string = type || "all";

        const list: Array<QueryParameter> = this._params.filter((objcheck: QueryParameter) => {
            return objcheck.type === ctype || objcheck.type === "all";
        });

        if (list.length > 0) {
            return list;
        }

        return null;
    }

    /**
     * Performs a combination of all include queries
     */
    private _IncludeQuery(): string | null {
        if (this._getIncludeQuery.length <= 0) {
            return null;
        }

        return `${this._getIncludeQuery.map((item) => `${item}`).join(",")}`;
    }
}