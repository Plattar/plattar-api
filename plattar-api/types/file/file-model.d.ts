import { FileBase } from "./file-base";

export class FileModel extends FileBase {
    static type(): "filemodel";

    get attributes(): any;
    set overrideAttributes(attributes: any);
}