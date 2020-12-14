import { SceneBase } from "./scene-base";

export class SceneCarousel extends SceneBase {
    static type(): "scenecarousel";

    get attributes(): any;
    set overrideAttributes(attributes: any);
}