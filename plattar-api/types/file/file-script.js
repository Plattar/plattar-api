const FileBase = require("./file-base.js");

class FileScript extends FileBase {
    static type() {
        return "filescript";
    }
}

module.exports = FileScript;