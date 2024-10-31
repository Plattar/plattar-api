import { SceneBase } from "./scene-base";

export class SceneGallery extends SceneBase {
    static type(): "scenegallery";

    get attributes(): any;
    set overrideAttributes(attributes: any);
}