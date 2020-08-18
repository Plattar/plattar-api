'use strict';
const FileBase = require('./file-base.js');

class FileImage extends FileBase {
    static type() {
        return 'fileimage';
    }
}

module.exports = FileImage;