const PlattarBase = require("../interfaces/plattar-base");

class Folder extends PlattarBase {
    static type() {
        return "folder";
    }
}

module.exports = Folder;