import { SceneBase } from "./scene-base";

export class SceneCamera extends SceneBase {
    static type(): "scenecamera";

    get attributes(): any;
    set overrideAttributes(attributes: any);
}