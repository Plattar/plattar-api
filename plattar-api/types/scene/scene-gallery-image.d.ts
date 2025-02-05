import { SceneBase } from "./scene-base";

export class SceneGalleryImage extends SceneBase {
    static type(): "scenegalleryimage";

    get attributes(): any;
    set overrideAttributes(attributes: any);
}