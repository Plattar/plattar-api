import { FileBase } from "./file-base";

export class FileAudio extends FileBase {
    static type(): "fileaudio";

    get attributes(): any;
    set overrideAttributes(attributes: any);
}