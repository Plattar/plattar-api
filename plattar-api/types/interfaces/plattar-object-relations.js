'use strict';

/**
 * Handles the list of relationships for the provided object
 */
class PlattarObjectRelations {
    constructor(parent) {
        this._parent = parent;
        this._relatedObjects = {};
    }

    /**
     * The parent that owns this list of relations
     */
    get parent() {
        return this._parent;
    }

    /**
     * Inserts the provided PlattarObject into the relations list
     * 
     * @param {*} obj The Object to insert. Object must be instance of PlattarObject
     */
    _put(obj) {
        if (!obj) {
            return this;
        }

        const PlattarUtil = require('../../util/plattar-util.js');

        // we only accept PlattarObject types
        if (!PlattarUtil.isPlattarObject(obj)) {
            throw new Error('PlattarObjectRelations._put(PlattarObject) - argument must be type of PlattarObject');
        }

        // this is the first time the object is being inserted
        // initialise an empty array
        if (!this._relatedObjects.hasOwnProperty(obj.type())) {
            this._relatedObjects[obj.type()] = [];
        }

        // add the object
        this._relatedObjects[obj.type()].push(obj);
    }

    /**
     * Search for the specific object type and return a list of all
     * types. This function will always return a list even if length is zero
     * 
     * @param {*} obj Object type to search. Objext must be an instance of PlattarObject
     * @param {*} id (optional) Object ID to filter with
     */
    filter(obj, id) {
        if (!obj) {
            return [];
        }

        const PlattarUtil = require('../../util/plattar-util.js');

        // we only accept PlattarObject types
        if (!PlattarUtil.isPlattarObject(obj)) {
            throw new Error('PlattarObjectRelations.filter(PlattarObject) - argument must be type of PlattarObject');
        }

        // check if the key actually exists in the relations
        if (!this._relatedObjects.hasOwnProperty(obj.type())) {
            return [];
        }

        const list = this._relatedObjects[obj.type()];

        // if no id is supplied, we just want everything of type
        if (!id) {
            return list;
        }

        // filter and only return objects that match the provided id
        return list.filter((objcheck) => {
            return objcheck.id == id;
        });
    }

    /**
     * Search for the specific object type and return the first index.
     * This function will return undefined if the object cannot be found.
     * 
     * @param {*} obj Object type to search. Object must be an instance of PlattarObject
     * @param {*} id (optional) Object ID to filter with
     */
    find(obj, id) {
        const list = this.filter(obj, id);

        if (list.length <= 0) {
            return undefined;
        }

        return list[0];
    }
}

module.exports = PlattarObjectRelations;