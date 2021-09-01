const PlattarBase = require("../interfaces/plattar-base");

class Brief extends PlattarBase {
    static type() {
        return "brief";
    }
}

module.exports = Brief;