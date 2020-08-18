'use strict';
const PlattarBase = require('../interfaces/plattar-base.js');

class ProductAnnotation extends PlattarBase {
    static type() {
        return 'productannotation';
    }
}

module.exports = ProductAnnotation;