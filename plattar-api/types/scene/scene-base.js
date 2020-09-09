const PlattarBase = require("../interfaces/plattar-base.js");
const Server = require("../../server/plattar-server.js");

class SceneBase extends PlattarBase {
    constructor(id, server) {
        super(id, server || Server.default());

        if (this.constructor === SceneBase) {
            throw new Error("SceneBase is abstract and cannot be created");
        }
    }

    static type() {
        const SceneAnnotation = require("./scene-annotation.js");
        const SceneAudio = require("./scene-audio.js");
        const SceneButton = require("./scene-button.js");
        const SceneCamera = require("./scene-camera.js");
        const SceneCarousel = require("./scene-carousel.js");
        const SceneImage = require("./scene-image.js");
        const SceneModel = require("./scene-model.js");
        const ScenePanorama = require("./scene-panorama.js");
        const ScenePoller = require("./scene-poller.js");
        const SceneProduct = require("./scene-product.js");
        const SceneShadow = require("./scene-shadow.js");
        const SceneVideo = require("./scene-video.js");
        const SceneVolumetric = require("./scene-volumetric.js");
        const SceneYoutube = require("./scene-youtube.js");

        return [SceneAnnotation, SceneAudio, SceneButton, SceneCamera, SceneCarousel, SceneImage, SceneModel, ScenePanorama, ScenePoller, SceneProduct, SceneShadow, SceneVideo, SceneVolumetric, SceneYoutube];
    }
}

module.exports = SceneBase;