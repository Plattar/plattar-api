declare module "@plattar/plattar-api" {
    export var version: string;
}

export { PlattarServer as Server, ServerType, ServerOptions, ServerAuth } from "./server/plattar-server";
export { PlattarUtil as Util } from "./util/plattar-util";
export { Application as Project } from "./types/application";

// export Scene and its types
export { Scene } from "./types/scene/scene";
export { SceneAnnotation } from "./types/scene/scene-annotation";
export { SceneAudio } from "./types/scene/scene-audio";
export { SceneButton } from "./types/scene/scene-button";
export { SceneCamera } from "./types/scene/scene-camera";
export { SceneCarousel } from "./types/scene/scene-carousel";
export { SceneImage } from "./types/scene/scene-image";
export { SceneModel } from "./types/scene/scene-model";
export { ScenePanorama } from "./types/scene/scene-panorama";
export { ScenePoller } from "./types/scene/scene-poller";
export { SceneProduct } from "./types/scene/scene-product";
export { SceneShadow } from "./types/scene/scene-shadow";
export { SceneVideo } from "./types/scene/scene-video";
export { SceneVolumetric } from "./types/scene/scene-volumetric";
export { SceneYoutube } from "./types/scene/scene-youtube";
export { SceneScript } from "./types/scene/scene-script";

// export Page and its types
export { Page } from "./types/page/page";
export { CardButton } from "./types/page/card-button";
export { CardHTML } from "./types/page/card-html";
export { CardIFrame } from "./types/page/card-iframe";
export { CardImage } from "./types/page/card-image";
export { CardMap } from "./types/page/card-map";
export { CardParagraph } from "./types/page/card-paragraph";
export { CardRow } from "./types/page/card-row";
export { CardSlider } from "./types/page/card-slider";
export { CardTitle } from "./types/page/card-title";
export { CardVideo } from "./types/page/card-video";
export { CardYoutube } from "./types/page/card-youtube";

// export Product and its types
export { Product } from "./types/product/product";
export { ProductVariation } from "./types/product/product-variation";
export { ProductAnnotation } from "./types/product/product-annotation";

// export File and its types
export { FileVideo } from "./types/file/file-video";
export { FileAudio } from "./types/file/file-audio";
export { FileImage } from "./types/file/file-image";
export { FileModel } from "./types/file/file-model";
export { FileScript } from "./types/file/file-script";

// export misc
export { ScriptEvent } from "./types/misc/script-event";
export { Tag } from "./types/misc/tag";
export { ApplicationBuild } from "./types/misc/application-build";
export { AsyncJob } from "./types/misc/async-job";
export { AssetLibrary } from "./types/misc/asset-library";

// export trigger
export { TriggerImage } from "./types/trigger/trigger-image";

// base types
export { FileBase as FileObject } from "./types/file/file-base";
export { SceneBase as SceneObject } from "./types/scene/scene-base";
export { ProductBase as ProductObject } from "./types/product/product-base";
export { CardBase as CardObject } from "./types/page/card-base";