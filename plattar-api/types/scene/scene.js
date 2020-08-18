'use strict';
const PlattarBase = require('../interfaces/plattar-base.js');

class Scene extends PlattarBase {
    static type() {
        return 'scene';
    }
}

module.exports = Scene;