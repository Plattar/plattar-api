const CardBase = require("./card-base.js");

class CardRow extends CardBase {
    static type() {
        return "cardrow";
    }
}

module.exports = CardRow;