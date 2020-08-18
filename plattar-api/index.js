'use strict';
const PlattarServer = require('./server/plattar-server.js');
const PlattarUtil = require('./util/plattar-util.js');
const Application = require('./types/application.js');

// import Scene and its types
const Scene = require('./types/scene/scene.js');

// import Page and its types
const Page = require('./types/page/page.js');
const CardButton = require('./types/page/card-button.js');
const CardHTML = require('./types/page/card-html.js');
const CardIFrame = require('./types/page/card-iframe.js');
const CardImage = require('./types/page/card-image.js');
const CardMap = require('./types/page/card-map.js');
const CardParagraph = require('./types/page/card-paragraph.js');
const CardRow = require('./types/page/card-row.js');
const CardSlider = require('./types/page/card-slider.js');
const CardTitle = require('./types/page/card-title.js');
const CardVideo = require('./types/page/card-video.js');
const CardYoutube = require('./types/page/card-youtube.js');

// import Product and its types
const Product = require('./types/product/product.js');
const ProductVariation = require('./types/product/product-variation.js');
const ProductAnnotation = require('./types/product/product-annotation.js');

// import File and its types
const FileAudio = require('./types/file/file-audio.js');
const FileVideo = require('./types/file/file-video.js');
const FileModel = require('./types/file/file-model.js');
const FileImage = require('./types/file/file-image.js');

// create a default server instance to be used globally
PlattarServer.create();

module.exports = {
    Server: PlattarServer,
    Util: PlattarUtil,
    Project: Application,
    Scene: Scene,
    Page: Page,
    CardButton: CardButton,
    CardHTML: CardHTML,
    CardIFrame: CardIFrame,
    CardImage: CardImage,
    CardMap: CardMap,
    CardParagraph: CardParagraph,
    CardRow: CardRow,
    CardSlider: CardSlider,
    CardTitle: CardTitle,
    CardVideo: CardVideo,
    CardYoutube: CardYoutube,
    Product: Product,
    ProductVariation: ProductVariation,
    ProductAnnotation: ProductAnnotation,
    AudioFile: FileAudio,
    VideoFile: FileVideo,
    ModelFile: FileModel,
    ImageFile: FileImage
}