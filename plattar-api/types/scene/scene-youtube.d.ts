import { SceneBase } from "./scene-base";

export class SceneYoutube extends SceneBase {
    static type(): "sceneyoutube";

    get attributes(): any;
    set overrideAttributes(attributes: any);
}