const PlattarBase = require("../interfaces/plattar-base.js");

class ApplicationBuild extends PlattarBase {
    static type() {
        return "applicationbuild";
    }
}

module.exports = ApplicationBuild;