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

    /**
     * Returns the full remote path of the file
     * Use this path to download the object into your machine
     */
    get filePath() {
        if (!this.attributes.path) {
            return undefined;
        }

        return this._query.server.cdn + this.attributes.path + this.attributes.original_filename;
    }

    /**
     * Returns the full remote path of the file backup as a Zip File
     * Use this path to download the object object into your machine
     */
    get fileBackupPath() {
        if (!this.attributes.path) {
            return undefined;
        }

        return this._query.server.cdn + this.attributes.path + this.attributes.original_upload;
    }
}

module.exports = FileBase;