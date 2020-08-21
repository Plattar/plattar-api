const fetch = require('node-fetch');

'use strict';
class PlattarQuery {

    /**
     * Plattar uses GUID for all object ids. This means
     * that the GUID will not be shared between different
     * object instances. This allows us to create a global
     * static cache to optimise fetch operations for all
     * objects.
     * 
     * WARNING: These are for internal uses only!
     */
    static _GlobalObjectCache = {};

    static _InvalidateGlobalCache() {
        PlattarQuery._GlobalObjectCache = {};
    }

    static _HasGlobalCachedObject(obj) {
        return PlattarQuery._GlobalObjectCache.hasOwnProperty(obj.id);
    }

    static _GetGlobalCachedObject(obj) {
        return PlattarQuery._HasGlobalCachedObject(obj) ? PlattarQuery._GlobalObjectCache[obj.id] : undefined;
    }

    static _SetGlobalCachedObject(obj) {
        PlattarQuery._GlobalObjectCache[obj.id] = obj;
    }

    static _DeleteGlobalCachedObject(obj) {
        if (PlattarQuery._HasGlobalCachedObject(obj)) {
            delete PlattarQuery._GlobalObjectCache[obj.id];
        }
    }

    constructor(target, server) {
        if (!target) {
            throw new Error('PlattarQuery cannot be created as target object cannot be null');
        }

        if (!server) {
            throw new Error('PlattarQuery cannot be created as server object cannot be null');
        }

        this._target = target;
        this._server = server;
        this._getIncludeQuery = [];
    }

    get target() {
        return this._target;
    }

    get server() {
        return this._server;
    }

    _get(opt) {
        return new Promise((resolve, reject) => {
            const target = this.target;
            const server = this.server;

            // we cannot perform a GET request without an ID
            if (!target.id) {
                reject(new Error('PlattarQuery.' + target.type() + '.get() - object id is missing'));
                return;
            }

            const options = opt || { cache: true };

            // look in the cache only if its enabled
            if (options.cache == true) {
                // check global cache first
                const cached = PlattarQuery._GetGlobalCachedObject(target);

                if (cached) {
                    resolve(cached);
                    return;
                }
            }

            // otherwise, proceed with the fetching op
            const origin = server.originLocation;
            const auth = server.authToken;

            const reqopts = {
                method: 'GET',
                headers: auth
            };

            const includeQuery = this._IncludeQuery;

            let endpoint = origin + target.type() + '/' + target.id;

            if (includeQuery) {
                endpoint = endpoint + '?include=' + includeQuery;
            }

            fetch(endpoint, reqopts)
                .then((res) => {
                    if (res.ok) {
                        try {
                            return res.json();
                        }
                        catch (err) {
                            return new Error('PlattarQuery.' + target.type() + '.get(' + target.id + ') - critical error occured, cannot proceed');
                        }
                    }

                    return new Error('PlattarQuery.' + target.type() + '.get(' + target.id + ') - unexpected error occured, cannot proceed. error message is ' + res.statusText);
                })
                .then((json) => {
                    if (json instanceof Error) {
                        reject(json);
                    }
                    else {
                        const PlattarUtil = require('../util/plattar-util.js');

                        PlattarUtil.reconstruct(target, json, options);

                        resolve(target);
                    }
                });
        });
    }

    _update() {
        return new Promise((resolve, reject) => {
            reject(new Error('PlattarQuery.' + this.target.type() + '.update(' + this.target.id + ') - not implemented'));
        });
    }

    /**
     * Creates a brand new object in Plattar.
     * 
     * @param {*} reqattr the required attributes for creating this object
     */
    static _create(reqattr) {
        return new Promise((resolve, reject) => {
            reject(new Error('PlattarQuery.' + this.target.type() + '._create() - not implemented'));
        });
    }

    _delete() {
        return new Promise((resolve, reject) => {
            reject(new Error('PlattarQuery.' + this.target.type() + '.delete(' + this.target.id + ') - not implemented'));
        });
    }

    /**
     * Includes this query with the next GET operation
     */
    _include(args) {
        if (!args || args.length <= 0) {
            return this;
        }

        const PlattarUtil = require('../util/plattar-util.js');

        args.forEach((obj) => {
            // object passed is of PlattarObject type
            if (Array.isArray(obj)) {
                obj.forEach((strObject) => {
                    if (typeof strObject === 'string' || strObject instanceof String) {
                        this._getIncludeQuery.push(strObject);
                    }
                    else {
                        throw new Error('PlattarQuery.' + this.target.type() + '.include(...args) - argument of Array must only include Strings');
                    }
                });
            }
            else if (PlattarUtil.isPlattarObject(obj)) {
                this._getIncludeQuery.push(obj.type());
            }
            else {
                throw new Error('PlattarQuery.' + this.target.type() + '.include(...args) - argument must be of type PlattarObject or Array but was type=' + (typeof obj) + ' value=' + obj);
            }
        });

        return this;
    }

    /**
     * Performs a combination of all include queries
     */
    get _IncludeQuery() {
        if (this._getIncludeQuery.length <= 0) {
            return undefined;
        }

        return `${this._getIncludeQuery.map((item, i) => `${item}`).join(',')}`;
    }
}


module.exports = PlattarQuery;