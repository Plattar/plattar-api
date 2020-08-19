'use strict';
const Application = require('../types/application.js');

// import Scene types and its children
const Scene = require('../types/scene/scene.js');
const SceneAnnotation = require('../types/scene/scene-annotation.js');
const SceneAudio = require('../types/scene/scene-audio.js');
const SceneButton = require('../types/scene/scene-button.js');
const SceneCamera = require('../types/scene/scene-camera.js');
const SceneCarousel = require('../types/scene/scene-carousel.js');
const SceneImage = require('../types/scene/scene-image.js');
const SceneModel = require('../types/scene/scene-model.js');
const ScenePanorama = require('../types/scene/scene-panorama.js');
const ScenePoller = require('../types/scene/scene-poller.js');
const SceneProduct = require('../types/scene/scene-product.js');
const SceneShadow = require('../types/scene/scene-shadow.js');
const SceneVideo = require('../types/scene/scene-video.js');
const SceneVolumetric = require('../types/scene/scene-volumetric.js');
const SceneYoutube = require('../types/scene/scene-youtube.js');

// import Page types and its children
const Page = require('../types/page/page.js');
const CardButton = require('../types/page/card-button.js');
const CardHTML = require('../types/page/card-html.js');
const CardIFrame = require('../types/page/card-iframe.js');
const CardImage = require('../types/page/card-image.js');
const CardMap = require('../types/page/card-map.js');
const CardParagraph = require('../types/page/card-paragraph.js');
const CardRow = require('../types/page/card-row.js');
const CardSlider = require('../types/page/card-slider.js');
const CardTitle = require('../types/page/card-title.js');
const CardVideo = require('../types/page/card-video.js');
const CardYoutube = require('../types/page/card-youtube.js');

// import Product types and its children
const Product = require('../types/product/product.js');
const ProductVariation = require('../types/product/product-variation.js');
const ProductAnnotation = require('../types/product/product-annotation.js');

// import File and its types
const FileAudio = require('../types/file/file-audio.js');
const FileVideo = require('../types/file/file-video.js');
const FileModel = require('../types/file/file-model.js');
const FileImage = require('../types/file/file-image.js');

class PlattarUtil {

    /**
     * Checks if the provided Object is a Plattar Object
     * 
     * @param {*} obj The object instance to check
     */
    static isPlattarObject(obj) {
        const PlattarObject = require('../types/interfaces/plattar-object.js');

        if (obj && obj.prototype && obj.prototype instanceof PlattarObject) {
            return true;
        }

        if (obj && obj instanceof PlattarObject) {
            return true;
        }

        return false;
    }

    /**
     * This function will recursively reconstruct an object
     * and its required hierarchy from a provided response JSON
     * from the PLATTAR Server.
     * 
     * This is an internal use function and should not be used directly
     * 
     * @param {*} parent The parent object of the request
     * @param {*} json  The parsed JSON data from the PLATTAR Server
     * @param {*} options The cache/process options
     */
    static reconstruct(parent, json, options) {
        parent._attributes = json.data.attributes;

        // cache the current object in the global cache
        if (options.cache == true) {
            parent._cache();
        }

        // todo
    }

    /**
     * Used to dynamically match types from the Plattar API into class objects
     * Throws an Error if the provided type does not exit.
     * 
     * @param {*} type (string) the type of object to create
     * @param {*} id (string) the id of the object
     * @param {*} server (optional) the server this object belongs in
     */
    static create(type, id, server) {
        switch (type) {
            case Application.type(): return new Application(id, server);
            case Scene.type(): return new Scene(id, server);
            case SceneAnnotation.type(): return new SceneAnnotation(id, server);
            case SceneAudio.type(): return new SceneAudio(id, server);
            case SceneButton.type(): return new SceneButton(id, server);
            case SceneCamera.type(): return new SceneCamera(id, server);
            case SceneCarousel.type(): return new SceneCarousel(id, server);
            case SceneImage.type(): return new SceneImage(id, server);
            case SceneModel.type(): return new SceneModel(id, server);
            case ScenePanorama.type(): return new ScenePanorama(id, server);
            case ScenePoller.type(): return new ScenePoller(id, server);
            case SceneProduct.type(): return new SceneProduct(id, server);
            case SceneShadow.type(): return new SceneShadow(id, server);
            case SceneVideo.type(): return new SceneVideo(id, server);
            case SceneVolumetric.type(): return new SceneVolumetric(id, server);
            case SceneYoutube.type(): return new SceneYoutube(id, server);
            case Page.type(): return new Page(id, server);
            case CardButton.type(): return new CardButton(id, server);
            case CardHTML.type(): return new CardHTML(id, server);
            case CardIFrame.type(): return new CardIFrame(id, server);
            case Product.type(): return new Product(id, server);
            case ProductVariation.type(): return new ProductVariation(id, server);
            case ProductAnnotation.type(): return new ProductAnnotation(id, server);
            case FileAudio.type(): return new FileAudio(id, server);
            case FileVideo.type(): return new FileVideo(id, server);
            case FileModel.type(): return new FileModel(id, server);
            case FileImage.type(): return new FileImage(id, server);
            case CardMap.type(): return new CardMap(id, server);
            case CardParagraph.type(): return new CardParagraph(id, server);
            case CardRow.type(): return new CardRow(id, server);
            case CardSlider.type(): return new CardSlider(id, server);
            case CardTitle.type(): return new CardTitle(id, server);
            case CardVideo.type(): return new CardVideo(id, server);
            case CardYoutube.type(): return new CardYoutube(id, server);
            case CardImage.type(): return new CardImage(id, server);
            default: throw new Error('PlattarUtil.create(type, id, server) - provided type of \'' + type + '\' does not exist');
        }
    }
}

module.exports = PlattarUtil;