const CardBase = require("./card-base.js");

class CardButton extends CardBase {
    static type() {
        return "cardbutton";
    }
}

module.exports = CardButton;