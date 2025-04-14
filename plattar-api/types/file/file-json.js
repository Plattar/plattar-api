const FileBase = require("./file-base.js");

class FileJSON extends FileBase {
    static type() {
        return "filejson";
    }
}

module.exports = FileJSON;