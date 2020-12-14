import { SceneBase } from "./scene-base";

export class ScenePoller extends SceneBase {
    static type(): "scenepoller";

    get attributes(): any;
    set overrideAttributes(attributes: any);
}