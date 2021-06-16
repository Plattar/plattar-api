const PlattarBase = require("../interfaces/plattar-base.js");

class TriggerImage extends PlattarBase {
    static type() {
        return "triggerimage";
    }
}

module.exports = TriggerImage;