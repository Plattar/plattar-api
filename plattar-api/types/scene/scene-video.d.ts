import { SceneBase } from "./scene-base";

export class SceneVideo extends SceneBase {
    static type(): "scenevideo";

    get attributes(): any;
    set overrideAttributes(attributes: any);
}