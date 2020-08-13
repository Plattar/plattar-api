const got = require('got');

'use strict';
class PlattarObject {
    constructor(server, id, type) {
        this._id = id;
        this._server = server;
        this._type = type;
        this._attributes = {};
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

    get(id) {
        this._id = id ? id : this._id;

        return new Promise((resolve, reject) => {

        });
    }

    update() {
        return new Promise((resolve, reject) => {

        });
    }

    create() {
        return new Promise((resolve, reject) => {

        });
    }

    delete() {
        return new Promise((resolve, reject) => {

        });
    }
}

module.exports = PlattarObject;