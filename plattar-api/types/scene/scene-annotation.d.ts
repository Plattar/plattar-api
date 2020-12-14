import { SceneBase } from "./scene-base";

export class SceneAnnotation extends SceneBase {
    static type(): "sceneannotation";

    get attributes(): any;
    set overrideAttributes(attributes: any);
}