import { SceneBase } from "./scene-base";

export class SceneImage extends SceneBase {
    static type(): "sceneimage";

    get attributes(): any;
    set overrideAttributes(attributes: any);
}