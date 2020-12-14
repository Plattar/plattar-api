import { SceneBase } from "./scene-base";

export class Scene extends SceneBase {
    static type(): "scene";

    get attributes(): any;
    set overrideAttributes(attributes: any);
}