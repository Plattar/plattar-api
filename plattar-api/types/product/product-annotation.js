'use strict';
const PlattarObject = require('../interfaces/plattar-object.js');
const Server = require('../../server/plattar-server.js');

class ProductAnnotation extends PlattarObject {
    constructor(id, server) {
        super(id, server || Server.default());
    }

    static type() {
        return 'productannotation';
    }
}

module.exports = ProductAnnotation;