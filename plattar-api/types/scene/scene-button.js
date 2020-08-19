'use strict';
const SceneBase = require('./scene-base.js');

class SceneButton extends SceneBase {
    static type() {
        return 'scenebutton';
    }
}

module.exports = SceneButton;