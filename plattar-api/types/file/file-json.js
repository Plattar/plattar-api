const FileBase = require("./file-base.js");

class FileJson extends FileBase {
    static type() {
        return "filejson";
    }
}

module.exports = FileJson;