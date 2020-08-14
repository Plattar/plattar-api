const got = require('got');

'use strict';
const PlattarObject = require('../interfaces/plattar-object.js');
const Server = require('../../server/plattar-server.js');

class CardButton extends PlattarObject {
    constructor(id, server) {
        super(id, server || Server.default(), CardButton.type());
    }

    static type() {
        return 'cardbutton';
    }
}

module.exports = CardButton;