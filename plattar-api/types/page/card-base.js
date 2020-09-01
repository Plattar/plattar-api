const PlattarBase = require("../interfaces/plattar-base.js");
const Server = require("../../server/plattar-server.js");

class CardBase extends PlattarBase {
    constructor(id, server) {
        super(id, server || Server.default());

        if (this.constructor == CardBase) {
            throw new Error("CardBase is abstract and cannot be created");
        }
    }
}

module.exports = CardBase;