const PlattarBase = require("../interfaces/plattar-base");

class Quote extends PlattarBase {
    static type() {
        return "quote";
    }
}

module.exports = Quote;