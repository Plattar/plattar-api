const fetch = require("node-fetch");

class PlattarQuery {
    constructor(target, server) {
        if (!target) {
            throw new Error("PlattarQuery cannot be created as target object cannot be null");
        }

        if (!server) {
            throw new Error("PlattarQuery cannot be created as server object cannot be null");
        }

        this._target = target;
        this._server = server;
        this._params = [];
        this._getIncludeQuery = [];
    }

    get target() {
        return this._target;
    }

    get server() {
        return this._server;
    }

    getCookie(cname) {
        let name = cname + "=";
        let decodedCookie = decodeURIComponent(document.cookie);
        let ca = decodedCookie.split(';');

        for (let i = 0; i < ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length);
            }
        }

        return "";
    }

    _get(opt) {
        return new Promise((resolve, reject) => {
            const target = this.target;
            const server = this.server;

            // we cannot perform a GET request without an ID
            if (!target.id) {
                reject(new Error("PlattarQuery." + target.type() + ".get() - object id is missing"));
                return;
            }

            const options = opt || { cache: true };

            // look in the cache only if its enabled
            if (options.cache === true) {
                // check global cache first
                const cached = PlattarQuery._GetGlobalCachedObject(target);

                if (cached) {
                    resolve(cached);
                    return;
                }
            }

            // otherwise, proceed with the fetching op
            const origin = server.originLocation.api_read;
            const auth = server.authToken;

            const headers = {
                'cookie': 'laravel_session=' + this.getCookie('laravel_session')
            };

            Object.assign(headers, auth);

            const reqopts = {
                method: "GET",
                headers: headers
            };

            const includeQuery = this._IncludeQuery;
            const params = this._ParamFor("get");

            let endpoint = origin + target.type() + "/" + target.id;

            if (includeQuery) {
                endpoint = endpoint + "?include=" + includeQuery;
            }

            if (params) {
                let appender = includeQuery ? "&" : "?";

                params.forEach((param) => {
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
                            return new Error("PlattarQuery." + target.type() + ".get(" + target.id + ") - critical error occured, cannot proceed");
                        }
                    }

                    return new Error("PlattarQuery." + target.type() + ".get(" + target.id + ") - unexpected error occured, cannot proceed. error message is " + res.statusText);
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

    _update() {
        return new Promise((resolve, reject) => {
            const target = this.target;
            const server = this.server;

            // we cannot perform a GET request without an ID
            if (!target.id) {
                reject(new Error("PlattarQuery." + target.type() + ".update() - object id is missing"));
                return;
            }

            // otherwise, proceed with the fetching op
            const origin = server.originLocation.api_write;
            const auth = server.authToken;

            const headers = {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'cookie': 'laravel_session=' + this.getCookie('laravel_session')
            };

            Object.assign(headers, auth);

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

            const params = this._ParamFor("update");

            let endpoint = origin + target.type() + "/" + target.id;

            if (params) {
                let appender = "?";

                params.forEach((param) => {
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
                            return new Error("PlattarQuery." + target.type() + ".update(" + target.id + ") - critical error occured, cannot proceed");
                        }
                    }

                    return new Error("PlattarQuery." + target.type() + ".update(" + target.id + ") - unexpected error occured, cannot proceed. error message is " + res.statusText);
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

    _create() {
        return new Promise((resolve, reject) => {
            const target = this.target;
            const server = this.server;

            // otherwise, proceed with the fetching op
            const origin = server.originLocation.api_write;
            const auth = server.authToken;

            const headers = {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'cookie': 'laravel_session=' + this.getCookie('laravel_session')
            };

            Object.assign(headers, auth);

            const reqopts = {
                method: "POST",
                headers: headers,
                body: JSON.stringify(
                    {
                        data: {
                            attributes: target.attributes
                        },
                        meta: target.meta || {}
                    }
                )
            };

            const params = this._ParamFor("create");

            let endpoint = origin + target.type();

            if (params) {
                let appender = "?";

                params.forEach((param) => {
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
                            return new Error("PlattarQuery." + target.type() + ".create() - critical error occured, cannot proceed");
                        }
                    }

                    return new Error("PlattarQuery." + target.type() + ".create() - unexpected error occured, cannot proceed. error message is " + res.statusText);
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

    _delete() {
        return new Promise((resolve, reject) => {
            reject(new Error("PlattarQuery." + this.target.type() + ".delete(" + this.target.id + ") - not implemented"));
        });
    }

    /**
     * Adds a specific request parameter
     */
    _addParameter(key, value, type) {
        type = type || "all";

        this._params.push({
            key: key,
            value: value,
            type: type.toLowerCase()
        });
    }

    /**
     * Includes this query with the next GET operation
     */
    _include(args) {
        if (!args || args.length <= 0) {
            return this;
        }

        const PlattarUtil = require("../util/plattar-util.js");

        args.forEach((obj) => {
            // object passed is of PlattarObject type
            if (Array.isArray(obj)) {
                obj.forEach((strObject) => {
                    if (typeof strObject === "string" || strObject instanceof String) {
                        this._getIncludeQuery.push(strObject);
                    }
                    else {
                        throw new Error("PlattarQuery." + this.target.type() + ".include(...args) - argument of Array must only include Strings");
                    }
                });
            }
            else if (PlattarUtil.isPlattarObject(obj)) {
                const type = obj.type();

                if (Array.isArray(type)) {
                    this._include(type);
                }
                else {
                    this._getIncludeQuery.push(type);
                }
            }
            else {
                throw new Error("PlattarQuery." + this.target.type() + ".include(...args) - argument must be of type PlattarObject or Array but was type=" + (typeof obj) + " value=" + obj);
            }
        });

        return this;
    }

    /**
     * Filters and returns all request parameters for a particular
     * request type
     */
    _ParamFor(type) {
        type = type || "all";

        const list = this._params.filter((objcheck) => {
            return objcheck.type === type || objcheck.type === "all";
        });

        if (list.length > 0) {
            return list;
        }

        return undefined;
    }

    /**
     * Performs a combination of all include queries
     */
    get _IncludeQuery() {
        if (this._getIncludeQuery.length <= 0) {
            return undefined;
        }

        return `${this._getIncludeQuery.map((item) => `${item}`).join(",")}`;
    }
}

/**
 * Plattar uses GUID for all object ids. This means
 * that the GUID will not be shared between different
 * object instances. This allows us to create a global
 * static cache to optimise fetch operations for all
 * objects.
 * 
 * WARNING: These are for internal uses only!
 */
PlattarQuery._GlobalObjectCache = {};

PlattarQuery._InvalidateGlobalCache = () => {
    PlattarQuery._GlobalObjectCache = {};
};

PlattarQuery._HasGlobalCachedObject = (obj) => {
    return PlattarQuery._GlobalObjectCache.hasOwnProperty(obj.id);
};

PlattarQuery._GetGlobalCachedObject = (obj) => {
    return PlattarQuery._HasGlobalCachedObject(obj) ? PlattarQuery._GlobalObjectCache[obj.id] : undefined;
};

PlattarQuery._SetGlobalCachedObject = (obj) => {
    // enable after extensive testing - too many bugs
    //PlattarQuery._GlobalObjectCache[obj.id] = obj;
};

PlattarQuery._DeleteGlobalCachedObject = (obj) => {
    if (PlattarQuery._HasGlobalCachedObject(obj)) {
        delete PlattarQuery._GlobalObjectCache[obj.id];
    }
};

module.exports = PlattarQuery;