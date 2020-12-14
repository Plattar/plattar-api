import { SceneBase } from "./scene-base";

export class SceneAudio extends SceneBase {
    static type(): "sceneaudio";

    get attributes(): any;
    set overrideAttributes(attributes: any);
}