import { SceneBase } from "./scene-base";

export class ScenePanorama extends SceneBase {
    static type(): "scenepanorama";

    get attributes(): any;
    set overrideAttributes(attributes: any);
}