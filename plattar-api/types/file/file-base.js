const PlattarBase = require("../interfaces/plattar-base.js");
const Server = require("../../server/plattar-server.js");

class FileBase extends PlattarBase {
    constructor(id, server) {
        super(id, server || Server.default());

        if (this.constructor === FileBase) {
            throw new Error("FileBase is abstract and cannot be created");
        }
    }

    static type() {
        const FileAudio = require("./file-audio.js");
        const FileVideo = require("./file-video.js");
        const FileModel = require("./file-model.js");
        const FileImage = require("./file-image.js");

        return [FileAudio, FileVideo, FileModel, FileImage];
    }

    /**
     * Returns the full remote path of the file
     * Use this path to download the object into your machine
     */
    get path() {
        if (!this.attributes.path) {
            return null;
        }

        return this._query.server.originLocation.cdn + this.attributes.path + this.attributes.original_filename;
    }

    /**
     * Returns the full remote path of the file backup as a Zip File
     * Use this path to download the object object into your machine
     */
    get backupPath() {
        if (!this.attributes.path) {
            return null;
        }

        return this._query.server.originLocation.cdn + this.attributes.path + this.attributes.original_upload;
    }
}

module.exports = FileBase;