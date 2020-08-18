'use strict';
const PlattarObject = require('../interfaces/plattar-object.js');
const Server = require('../../server/plattar-server.js');

class FileBase extends PlattarObject {
    constructor(id, server) {
        super(id, server || Server.default());

        if (this.constructor == FileBase) {
            throw new Error('FileBase is abstract and cannot be created');
        }
    }
}

module.exports = FileBase;