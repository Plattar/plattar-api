const got = require('got');

'use strict';
const PlattarObject = require('./../interfaces/plattar-object.js');
const Server = require('./../../server/plattar-server.js');

class Scene extends PlattarObject {
    constructor(id, server) {
        super(id, server || Server.default());
    }

    static type() {
        return 'scene';
    }
}

module.exports = Scene;