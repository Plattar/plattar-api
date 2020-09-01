const FileBase = require("./file-base.js");

class FileModel extends FileBase {
    static type() {
        return "filemodel";
    }
}

module.exports = FileModel;