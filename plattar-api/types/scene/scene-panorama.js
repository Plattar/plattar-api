'use strict';
const SceneBase = require('./scene-base.js');

class ScenePanorama extends SceneBase {
    static type() {
        return 'scenepanorama';
    }
}

module.exports = ScenePanorama;