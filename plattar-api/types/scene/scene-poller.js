const SceneBase = require("./scene-base.js");

class ScenePoller extends SceneBase {
    static type() {
        return "scenepoller";
    }
}

module.exports = ScenePoller;