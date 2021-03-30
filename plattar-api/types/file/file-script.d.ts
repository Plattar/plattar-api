import { FileBase } from "./file-base";

export interface FileScriptAttributes {
    readonly created_at?: string;
    readonly updated_at?: string;
    readonly deleted_at?: string;

    readonly title?: string;
    readonly script?: string;
    readonly properties?: string;
    readonly version?: number;
    readonly application_id?: string;
    readonly tag_ids?: [any];
}

export class FileScript extends FileBase {
    static type(): "filescript";

    get attributes(): FileScriptAttributes;
    set overrideAttributes(attributes: FileScriptAttributes);
}