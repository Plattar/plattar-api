'use strict';
const SceneBase = require('./scene-base.js');

class SceneProduct extends SceneBase {
    static type() {
        return 'sceneproduct';
    }
}

module.exports = SceneProduct;