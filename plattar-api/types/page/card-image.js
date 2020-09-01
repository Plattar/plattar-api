const CardBase = require("./card-base.js");

class CardImage extends CardBase {
    static type() {
        return "cardimage";
    }
}

module.exports = CardImage;