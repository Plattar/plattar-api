const got = require('got');

'use strict';
const PlattarObject = require('./../interfaces/plattar-object.js');
const Server = require('./../../server/plattar-server.js');

class Page extends PlattarObject {
    constructor(id, server) {
        super(id, server || Server.default(), Page.type());
    }

    static type() {
        return 'page';
    }
}

module.exports = Page;