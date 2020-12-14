export { PlattarServer as Server } from "./server/plattar-server";
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

// export Product and its types
export { Product } from "./types/product/product";
export { ProductVariation } from "./types/product/product-variation";
export { ProductAnnotation } from "./types/product/product-annotation";

// files
export { FileVideo } from "./types/file/file-video";
export { FileAudio } from "./types/file/file-audio";
export { FileImage } from "./types/file/file-image";
export { FileModel } from "./types/file/file-model";

// base types
export { FileBase as FileObject } from "./types/file/file-base";
export { SceneBase as SceneObject } from "./types/scene/scene-base";
export { ProductBase as ProductObject } from "./types/product/product-base";

declare module "@plattar/plattar-api" { }