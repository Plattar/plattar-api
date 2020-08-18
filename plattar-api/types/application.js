'use strict';
const PlattarBase = require('./interfaces/plattar-base.js');

class Application extends PlattarBase {
    static type() {
        return 'application';
    }
}

module.exports = Application;