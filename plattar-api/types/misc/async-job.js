const PlattarBase = require("../interfaces/plattar-base.js");

class AsyncJob extends PlattarBase {
    static type() {
        return "asyncjob";
    }

    set accessKey(code) {
        this.addParameter("access_key", code, "update");
    }
}

module.exports = AsyncJob;