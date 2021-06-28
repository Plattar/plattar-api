const PlattarBase = require("../interfaces/plattar-base.js");

class AssetLibrary extends PlattarBase {
    static type() {
        return "assetlibrary";
    }
}

module.exports = AssetLibrary;