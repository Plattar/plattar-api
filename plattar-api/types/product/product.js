const got = require('got');

'use strict';
const PlattarObject = require('../interfaces/plattar-object.js');
const Server = require('../../server/plattar-server.js');

class Product extends PlattarObject {
    constructor(id, server) {
        super(id, server || Server.default());
    }

    static type() {
        return 'product';
    }
}

module.exports = Product;