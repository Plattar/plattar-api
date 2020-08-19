'use strict';
const SceneBase = require('./scene-base.js');

class SceneModel extends SceneBase {
    static type() {
        return 'scenemodel';
    }
}

module.exports = SceneModel;