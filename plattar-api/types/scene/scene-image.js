'use strict';
const SceneBase = require('./scene-base.js');

class SceneImage extends SceneBase {
    static type() {
        return 'sceneimage';
    }
}

module.exports = SceneImage;