const SceneBase = require("./scene-base.js");

class SceneAnnotation extends SceneBase {
    static type() {
        return "sceneannotation";
    }
}

module.exports = SceneAnnotation;