'use strict';
const CardBase = require('./card-base.js');

class CardVideo extends CardBase {
    static type() {
        return 'cardvideo';
    }
}

module.exports = CardVideo;