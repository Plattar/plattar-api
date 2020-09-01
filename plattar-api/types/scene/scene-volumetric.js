const SceneBase = require("./scene-base.js");

class SceneVolumetric extends SceneBase {
    static type() {
        return "scenevolumetric";
    }
}

module.exports = SceneVolumetric;