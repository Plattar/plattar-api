const PlattarBase = require("../interfaces/plattar-base");

class Rating extends PlattarBase {
    static type() {
        return "rating";
    }
}

module.exports = Rating;