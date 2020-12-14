import { SceneBase } from "./scene-base";

export class SceneProduct extends SceneBase {
    static type(): "sceneproduct";

    get attributes(): any;
    set overrideAttributes(attributes: any);
}