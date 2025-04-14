import { FileBase } from "./file-base";

export class FileJson extends FileBase {
    static type(): "filejson";

    get attributes(): any;
    set overrideAttributes(attributes: any);
}
