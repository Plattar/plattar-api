const CardBase = require("./card-base.js");

class CardHTML extends CardBase {
    static type() {
        return "cardhtml";
    }
}

module.exports = CardHTML;