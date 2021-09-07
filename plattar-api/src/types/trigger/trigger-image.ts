import { BaseAttributes, PlattarBase } from "../../core/plattar-base";

export interface TriggerImageAttributes extends BaseAttributes {
    readonly width?: string;
    readonly height?: string;
    readonly file_image_id?: string;
    readonly scene_id?: string;
    readonly application_id?: string;
    readonly hash?: string;
    readonly tracking_rating?: string;
}

export class TriggerImage extends PlattarBase {

    public static get type(): string {
        return "triggerimage";
    }

    public get attributes(): TriggerImageAttributes {
        return super.attributes;
    }

    public set attributes(attr: TriggerImageAttributes) {
        super.attributes = attr;
    }
}