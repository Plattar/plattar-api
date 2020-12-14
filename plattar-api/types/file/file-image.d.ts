import { FileBase } from "./file-base";

export interface FileImageAttributes {
    readonly created_at?: string;
    readonly updated_at?: string;
    readonly deleted_at?: string;

    readonly title?: string;
    readonly path?: string;
    readonly original_filename?: string;
    readonly jpg_filename?: string;
    readonly png_filename?: string;
    readonly webp_filename?: string;
    readonly basis_filename?: string;
    readonly thumbnail?: string;
    readonly width?: number;
    readonly height?: number;
    readonly application_id?: string;
    readonly pot_filename?: string;
    readonly tag_ids?: [any];
}

export class FileImage extends FileBase {
    static type(): "fileimage";

    get attributes(): FileImageAttributes;
    set overrideAttributes(attributes: FileImageAttributes);
}