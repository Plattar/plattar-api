const got = require('got');

'use strict';
const PlattarObject = require('../interfaces/plattar-object.js');
const Server = require('../../server/plattar-server.js');

class CardHTML extends PlattarObject {
    constructor(id, server) {
        super(id, server || Server.default(), CardHTML.type());
    }

    static type() {
        return 'cardhtml';
    }
}

module.exports = CardHTML;