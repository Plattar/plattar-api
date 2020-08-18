'use strict';
const PlattarBase = require('../interfaces/plattar-base.js');

class Page extends PlattarBase {
    static type() {
        return 'page';
    }
}

module.exports = Page;