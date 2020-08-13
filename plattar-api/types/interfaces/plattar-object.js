const got = require('got');

'use strict';
class PlattarObject {

    /**
     * Plattar uses GUID for all object id's. This means
     * that the GUID will not be shared between different
     * object instances. This allows us to create a global
     * static cache to optimise fetch operations for all
     * objects.
     * 
     * WARNING: These are for internal uses only!
     */
    static _GlobalObjectCache = {};

    static _InvalidateGlobalCache() {
        PlattarObject._GlobalObjectCache = {};
    }

    static _HasGlobalCachedObject(obj) {
        return PlattarObject._GlobalObjectCache.hasOwnProperty(obj.id);
    }

    static _GetGlobalCachedObject(obj) {
        return PlattarObject._HasGlobalCachedObject(obj) ? PlattarObject._GlobalObjectCache[obj.id] : undefined;
    }

    static _SetGlobalCachedObject(obj) {
        PlattarObject._GlobalObjectCache[obj.id] = obj;
    }

    static _DeleteGlobalCachedObject(obj) {
        if (PlattarObject._HasGlobalCachedObject(obj)) {
            delete PlattarObject._GlobalObjectCache[obj.id];
        }
    }

    constructor(server, id, type) {
        this._id = id;
        this._server = server;
        this._type = type;
        this._attributes = {};
    }

    /**
     * Invalidates this specific Object from the Global Cache
     */
    invalidate() {
        return PlattarObject._DeleteGlobalCachedObject(this);
    }

    /**
     * Caches the current object in the global cache
     */
    _cache() {
        return PlattarObject._SetGlobalCachedObject(this);
    }

    /**
     * Returns the unique GUID of this object
     */
    get id() {
        return this._id;
    }

    /**
     * Returns the object type as a string
     */
    get type() {
        return this._type;
    }

    /**
     * Returns all attributes of the object
     */
    get attributes() {
        return this._attributes;
    }

    get() {
        return new Promise((resolve, reject) => {
            if (!this._server) {
                reject(new Error('PlattarObject.' + this.type + '.get() - server is missing, pass a server instance or create a default server'));
                return;
            }

            // we cannot perform a GET request without an ID
            if (!this.id) {
                reject(new Error('PlattarObject.' + this.type + '.get() - object id is missing'));
                return;
            }

            // check global cache first
            const cached = PlattarObject._GetGlobalCachedObject(this);

            if (cached) {
                resolve(cached);
                return;
            }

            // otherwise, proceed with the fetching op
            const origin = this._server.originLocation;
            const auth = this._server.authToken;

            const options = {
                headers: auth
            };

            const endpoint = origin + this.type + '/' + this.id;

            got.get(endpoint, options).then((response) => {
                const body = response.body;
                const json = JSON.parse(body);

                this._attributes = json.data.attributes;

                // cache the current object in the global cache
                this._cache();
                resolve(this);
            }).catch((error) => {
                if (!error || !error.response || !error.response.body) {
                    reject(new Error('PlattarObject.' + this.type + '.get(' + this.id + ') - critical error occured, cannot proceed'));
                    return;
                }

                const body = error.response.body;
                const json = JSON.parse(body);

                reject(new Error('PlattarObject.' + this.type + '.get(' + this.id + ') - ' + json.errors[0].detail));
            });
        });
    }

    update() {
        return new Promise((resolve, reject) => {
            reject(new Error('PlattarObject.' + this.type + '.update(' + this.id + ') - not implemented'));
        });
    }

    create() {
        return new Promise((resolve, reject) => {
            reject(new Error('PlattarObject.' + this.type + '.create(' + this.id + ') - not implemented'));
        });
    }

    delete() {
        return new Promise((resolve, reject) => {
            reject(new Error('PlattarObject.' + this.type + '.delete(' + this.id + ') - not implemented'));
        });
    }
}

module.exports = PlattarObject;