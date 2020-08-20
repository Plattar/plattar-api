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

        const server = parent._query.server;

        // fill the relationships for the object
        if (json.data.relationships) {
            for (const [key, value] of Object.entries(json.data.relationships)) {
                const data = value.data;

                if (Array.isArray(data)) {
                    data.forEach((item) => {
                        const construct = PlattarUtil.create(key, item.id, server);
                        construct._attributes = item.attributes || {};

                        parent.relationships._put(construct);
                    });
                }
                else {
                    const construct = PlattarUtil.create(key, data.id, server);
                    construct._attributes = data.attributes || {};

                    parent.relationships._put(construct);
                }
            }
        }

        // loop through the includes and populate as required
        if (json.included) {
            json.included.forEach((item) => {
                const existing = parent.relationships.find(PlattarUtil.match(item.type), item.id);

                if (existing) {
                    PlattarUtil.reconstruct(existing, {
                        data: item,
                        included: json.included
                    }, options);
                }
            });
        }
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
        // dynamic class matching from a string type
        const clazz = PlattarUtil.match(type);

        return new clazz(id, server);
    }

    /**
     * Dynamic class matching provided an object type as a string
     * 
     * @param {*} type The type of class to construct
     */
    static match(type) {
        switch (type) {
            case Application.type(): return Application;
            case Scene.type(): return Scene;
            case SceneAnnotation.type(): return SceneAnnotation;
            case SceneAudio.type(): return SceneAudio;
            case SceneButton.type(): return SceneButton;
            case SceneCamera.type(): return SceneCamera;
            case SceneCarousel.type(): return SceneCarousel;
            case SceneImage.type(): return SceneImage;
            case SceneModel.type(): return SceneModel;
            case ScenePanorama.type(): return ScenePanorama;
            case ScenePoller.type(): return ScenePoller;
            case SceneProduct.type(): return SceneProduct;
            case SceneShadow.type(): return SceneShadow;
            case SceneVideo.type(): return SceneVideo;
            case SceneVolumetric.type(): return SceneVolumetric;
            case SceneYoutube.type(): return SceneYoutube;
            case Page.type(): return Page;
            case CardButton.type(): return CardButton;
            case CardHTML.type(): return CardHTML;
            case CardIFrame.type(): return CardIFrame;
            case Product.type(): return Product;
            case ProductVariation.type(): return ProductVariation;
            case ProductAnnotation.type(): return ProductAnnotation;
            case FileAudio.type(): return FileAudio;
            case FileVideo.type(): return FileVideo;
            case FileModel.type(): return FileModel;
            case FileImage.type(): return FileImage;
            case CardMap.type(): return CardMap;
            case CardParagraph.type(): return CardParagraph;
            case CardRow.type(): return CardRow;
            case CardSlider.type(): return CardSlider;
            case CardTitle.type(): return CardTitle;
            case CardVideo.type(): return CardVideo;
            case CardYoutube.type(): return CardYoutube;
            case CardImage.type(): return CardImage;
            default: throw new Error('PlattarUtil.match(type) - provided type of \'' + type + '\' does not exist and cannot be created');
        }
    }
}

module.exports = PlattarUtil;