'use strict';
const PlattarObject = require('../interfaces/plattar-object.js');
const Server = require('../../server/plattar-server.js');

class CardHTML extends PlattarObject {
    constructor(id, server) {
        super(id, server || Server.default());
    }

    static type() {
        return 'cardhtml';
    }
}

module.exports = CardHTML;