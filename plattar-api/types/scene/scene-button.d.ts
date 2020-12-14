import { SceneBase } from "./scene-base";

export class SceneButton extends SceneBase {
    static type(): "scenebutton";

    get attributes(): any;
    set overrideAttributes(attributes: any);
}