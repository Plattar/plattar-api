import { SceneBase } from "./scene-base";

export class TriggerImage extends SceneBase {
    static type(): "triggerimage";

    get attributes(): any;
    set overrideAttributes(attributes: any);
}