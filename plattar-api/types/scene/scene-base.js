'use strict';
const PlattarBase = require('../interfaces/plattar-base.js');
const Server = require('../../server/plattar-server.js');

class SceneBase extends PlattarBase {
    constructor(id, server) {
        super(id, server || Server.default());

        if (this.constructor == SceneBase) {
            throw new Error('SceneBase is abstract and cannot be created');
        }
    }
}

module.exports = SceneBase;