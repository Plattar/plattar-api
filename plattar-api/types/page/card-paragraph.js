'use strict';
const CardBase = require('./card-base.js');

class CardParagraph extends CardBase {
    static type() {
        return 'cardparagraph';
    }
}

module.exports = CardParagraph;