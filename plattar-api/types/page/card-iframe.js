const got = require('got');

'use strict';
const PlattarObject = require('../interfaces/plattar-object.js');
const Server = require('../../server/plattar-server.js');

class CardIFrame extends PlattarObject {
    constructor(id, server) {
        super(id, server || Server.default(), CardIFrame.type());
    }

    static type() {
        return 'cardiframe';
    }
}

module.exports = CardIFrame;