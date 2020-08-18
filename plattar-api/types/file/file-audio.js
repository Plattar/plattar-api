'use strict';
const PlattarObject = require('../interfaces/plattar-object.js');
const Server = require('../../server/plattar-server.js');

class FileAudio extends PlattarObject {
    constructor(id, server) {
        super(id, server || Server.default());
    }

    static type() {
        return 'fileaudio';
    }
}

module.exports = FileAudio;