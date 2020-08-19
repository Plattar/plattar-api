'use strict';
const SceneBase = require('./scene-base.js');

class SceneVideo extends SceneBase {
    static type() {
        return 'scenevideo';
    }
}

module.exports = SceneVideo;