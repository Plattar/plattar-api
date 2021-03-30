import { SceneBase } from "./scene-base";

export class SceneScript extends SceneBase {
    static type(): "scenescript";

    get attributes(): any;
    set overrideAttributes(attributes: any);
}