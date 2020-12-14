import { SceneBase } from "./scene-base";

export class SceneModel extends SceneBase {
    static type(): "scenemodel";

    get attributes(): any;
    set overrideAttributes(attributes: any);
}