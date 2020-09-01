const FileBase = require("./file-base.js");

class FileAudio extends FileBase {
    static type() {
        return "fileaudio";
    }
}

module.exports = FileAudio;