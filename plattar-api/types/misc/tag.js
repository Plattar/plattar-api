const PlattarBase = require("../interfaces/plattar-base.js");

class Tag extends PlattarBase {
    static type() {
        return "tag";
    }
}

module.exports = Tag;