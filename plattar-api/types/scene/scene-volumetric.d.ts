import { SceneBase } from "./scene-base";

export class SceneVolumetric extends SceneBase {
    static type(): "scenevolumetric";

    get attributes(): any;
    set overrideAttributes(attributes: any);
}