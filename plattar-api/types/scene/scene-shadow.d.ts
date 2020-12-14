import { SceneBase } from "./scene-base";

export class SceneShadow extends SceneBase {
    static type(): "sceneshadow";

    get attributes(): any;
    set overrideAttributes(attributes: any);
}