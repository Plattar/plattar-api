import { FileBase } from "./file-base";

export class FileVideo extends FileBase {
    static type(): "filevideo";

    get attributes(): any;
    set overrideAttributes(attributes: any);
}