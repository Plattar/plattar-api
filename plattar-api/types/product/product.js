'use strict';
const PlattarBase = require('../interfaces/plattar-base.js');

class Product extends PlattarBase {
    static type() {
        return 'product';
    }
}

module.exports = Product;