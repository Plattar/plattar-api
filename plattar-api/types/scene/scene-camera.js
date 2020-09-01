const SceneBase = require("./scene-base.js");

class SceneCamera extends SceneBase {
    static type() {
        return "scenecamera";
    }
}

module.exports = SceneCamera;