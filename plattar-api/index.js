"use strict";
const Server = require("./server/plattar-server.js");
const Util = require("./util/plattar-util.js");
const Project = require("./types/application.js");

// import Scene and its types
const Scene = require("./types/scene/scene.js");
const SceneAnnotation = require("./types/scene/scene-annotation.js");
const SceneAudio = require("./types/scene/scene-audio.js");
const SceneButton = require("./types/scene/scene-button.js");
const SceneCamera = require("./types/scene/scene-camera.js");
const SceneCarousel = require("./types/scene/scene-carousel.js");
const SceneImage = require("./types/scene/scene-image.js");
const SceneModel = require("./types/scene/scene-model.js");
const ScenePanorama = require("./types/scene/scene-panorama.js");
const ScenePoller = require("./types/scene/scene-poller.js");
const SceneProduct = require("./types/scene/scene-product.js");
const SceneShadow = require("./types/scene/scene-shadow.js");
const SceneVideo = require("./types/scene/scene-video.js");
const SceneVolumetric = require("./types/scene/scene-volumetric.js");
const SceneYoutube = require("./types/scene/scene-youtube.js");
const SceneScript = require("./types/scene/scene-script.js");

// import Page and its types
const Page = require("./types/page/page.js");
const CardButton = require("./types/page/card-button.js");
const CardHTML = require("./types/page/card-html.js");
const CardIFrame = require("./types/page/card-iframe.js");
const CardImage = require("./types/page/card-image.js");
const CardMap = require("./types/page/card-map.js");
const CardParagraph = require("./types/page/card-paragraph.js");
const CardRow = require("./types/page/card-row.js");
const CardSlider = require("./types/page/card-slider.js");
const CardTitle = require("./types/page/card-title.js");
const CardVideo = require("./types/page/card-video.js");
const CardYoutube = require("./types/page/card-youtube.js");

// import Product and its types
const Product = require("./types/product/product.js");
const ProductVariation = require("./types/product/product-variation.js");
const ProductAnnotation = require("./types/product/product-annotation.js");

// import File and its types
const FileAudio = require("./types/file/file-audio.js");
const FileVideo = require("./types/file/file-video.js");
const FileModel = require("./types/file/file-model.js");
const FileImage = require("./types/file/file-image.js");
const FileScript = require("./types/file/file-script.js");

// import misc
const ScriptEvent = require("./types/misc/script-event.js");
const Tag = require("./types/misc/tag.js");
const ApplicationBuild = require("./types/misc/application-build.js");
const AsyncJob = require("./types/misc/async-job.js");

// import trigger
const TriggerImage = require("./types/trigger/trigger-image.js");

// base types
const SceneObject = require("./types/scene/scene-base.js");
const CardObject = require("./types/page/card-base.js");
const ProductObject = require("./types/product/product-base.js");
const FileObject = require("./types/file/file-base.js");

// create a default server instance to be used globally
Server.create();

module.exports = {
    // core types
    Server,
    Util,
    Project,
    // scene and types
    Scene,
    SceneAnnotation,
    SceneAudio,
    SceneButton,
    SceneCamera,
    SceneCarousel,
    SceneImage,
    SceneModel,
    ScenePanorama,
    ScenePoller,
    SceneProduct,
    SceneShadow,
    SceneVideo,
    SceneVolumetric,
    SceneYoutube,
    SceneScript,
    // page and types
    Page,
    CardButton,
    CardHTML,
    CardIFrame,
    CardImage,
    CardMap,
    CardParagraph,
    CardRow,
    CardSlider,
    CardTitle,
    CardVideo,
    CardYoutube,
    // product and types
    Product,
    ProductVariation,
    ProductAnnotation,
    // raw file/assets and types
    FileAudio,
    FileVideo,
    FileModel,
    FileImage,
    FileScript,
    FileObject,
    // misc
    ScriptEvent,
    Tag,
    ApplicationBuild,
    AsyncJob,
    // triggers
    TriggerImage,
    // base types
    SceneObject,
    CardObject,
    ProductObject
};
