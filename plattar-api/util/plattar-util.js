'use strict';
const Application = require('../types/application.js');

// import Scene types and its children
const Scene = require('../types/scene/scene.js');

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