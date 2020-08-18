'use strict';
const CardBase = require('./card-base.js');

class CardTitle extends CardBase {
    static type() {
        return 'cardtitle';
    }
}

module.exports = CardTitle;