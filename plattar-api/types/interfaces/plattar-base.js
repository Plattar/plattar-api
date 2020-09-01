const PlattarObject = require("./plattar-object.js");
const Server = require("../../server/plattar-server.js");

class PlattarBase extends PlattarObject {
    constructor(id, server) {
        super(id, server || Server.default());

        if (this.constructor == PlattarBase) {
            throw new Error("PlattarBase is abstract and cannot be created");
        }
    }
}

module.exports = PlattarBase;