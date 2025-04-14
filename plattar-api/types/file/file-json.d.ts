import { FileBase } from "./file-base";

export class FileJSON extends FileBase {
    static type(): "filejson";

    get attributes(): any;
    set overrideAttributes(attributes: any);
}
