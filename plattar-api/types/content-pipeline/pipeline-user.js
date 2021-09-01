const PlattarBase = require("../interfaces/plattar-base");

class PipelineUser extends PlattarBase {
    static type() {
        return "pipelineuser";
    }
}

module.exports = PipelineUser;