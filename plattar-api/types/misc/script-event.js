'use strict';
const PlattarBase = require('../interfaces/plattar-base.js');

class ScriptEvent extends PlattarBase {
    static type() {
        return 'scriptevent';
    }
}

module.exports = ScriptEvent;