'use strict';
const FileBase = require('./file-base.js');

class FileVideo extends FileBase {
    static type() {
        return 'filevideo';
    }
}

module.exports = FileVideo;