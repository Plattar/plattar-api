'use strict';
const PlattarBase = require('../interfaces/plattar-base.js');
const Server = require('../../server/plattar-server.js');

class FileBase extends PlattarBase {
    constructor(id, server) {
        super(id, server || Server.default());

        if (this.constructor == FileBase) {
            throw new Error('FileBase is abstract and cannot be created');
        }
    }
}

module.exports = FileBase;