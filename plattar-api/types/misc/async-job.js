const PlattarBase = require("../interfaces/plattar-base.js");

class AsyncJob extends PlattarBase {
    static type() {
        return "asyncjob";
    }
}

module.exports = AsyncJob;