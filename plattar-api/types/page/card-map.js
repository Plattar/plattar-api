const CardBase = require("./card-base.js");

class CardMap extends CardBase {
    static type() {
        return "cardmap";
    }
}

module.exports = CardMap;