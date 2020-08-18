'use strict';
const PlattarBase = require('../interfaces/plattar-base.js');

class ProductVariation extends PlattarBase {
    static type() {
        return 'productvariation';
    }
}

module.exports = ProductVariation;