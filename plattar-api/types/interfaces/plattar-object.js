const PlattarQuery = require("../../server/plattar-query.js");
const PlattarObjectRelations = require("./plattar-object-relations.js");

class PlattarObject {

    constructor(id, server) {
        if (this.constructor === PlattarObject) {
            throw new Error("PlattarObject is abstract and cannot be created");
        }

        this._id = id;
        this._attributes = {};
        this._query = new PlattarQuery(this, server);
        this._relationships = new PlattarObjectRelations(this);
    }

    /**
     * Invalidates this specific Object from the Global Cache
     */
    invalidate() {
        return PlattarQuery._DeleteGlobalCachedObject(this);
    }

    /**
     * Caches the current object in the global cache
     */
    _cache() {
        return PlattarQuery._SetGlobalCachedObject(this);
    }

    /**
     * Returns the unique GUID of this object
     */
    get id() {
        return this._id;
    }

    /**
     * Returns all attributes of the object
     */
    get attributes() {
        return this._attributes;
    }

    get relationships() {
        return this._relationships;
    }

    get(opt) {
        return this._query._get(opt);
    }

    update() {
        return this._query._update();
    }

    create() {
        return this._query._create();
    }

    delete() {
        return this._query._delete();
    }

    static type() {
        throw new Error("PlattarObject.type() - not implemented");
    }

    type() {
        return this.constructor.type();
    }

    /**
     * Used for performing additional query parameters
     */
    static include(...args) {
        if (!args || args.length <= 0) {
            return [];
        }

        const includes = [this.type()];

        args.forEach((obj) => {
            // object passed is of PlattarObject type
            if (Array.isArray(obj)) {
                obj.forEach((strObject) => {
                    if (typeof strObject === "string" || strObject instanceof String) {
                        includes.push(`${this.type()}.${strObject}`);
                    }
                    else {
                        throw new Error("PlattarObject." + this.type() + ".include(...args) - argument of Array must only include Strings");
                    }
                });
            }
            else if (obj.prototype instanceof PlattarObject) {
                includes.push(`${this.type()}.${obj.type()}`);
            }
            else {
                throw new Error("PlattarObject." + this.type() + ".include(...args) - argument must be of type PlattarObject or Array but was type=" + (typeof obj) + " value=" + obj);
            }
        });

        return includes;
    }

    /**
     * Includes this query with the next GET operation
     */
    include(...args) {
        this._query._include(args);

        return this;
    }

    /**
     * Adds a parameter for a particular request
     */
    addParameter(key, value, type) {
        this._query._addParameter(key, value, type);

        return this;
    }
}

module.exports = PlattarObject;