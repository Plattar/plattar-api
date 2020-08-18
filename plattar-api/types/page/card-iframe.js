'use strict';
const CardBase = require('./card-base.js');

class CardIFrame extends CardBase {
    static type() {
        return 'cardiframe';
    }
}

module.exports = CardIFrame;