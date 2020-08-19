'use strict';
const ProductBase = require('./product-base.js');

class ProductVariation extends ProductBase {
    static type() {
        return 'productvariation';
    }
}

module.exports = ProductVariation;