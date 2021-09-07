import { BaseAttributes, PlattarBase } from "../core/plattar-base";

export interface ApplicationAttributes extends BaseAttributes {
    readonly title?: string;
    readonly theme?: string;
    readonly icon_id?: string;
    readonly plattar_team_id?: string;
    readonly color_primary?: string;
    readonly feature_flags?: string;
    readonly scan_prompt_image_id?: string;
    readonly parent_application_id?: string;
    readonly google_analytics_token?: string;
    readonly splash_image_id?: string;
    readonly camera_help_image_id?: string;
    readonly short_id?: string;
    readonly plan_id?: string;
    readonly watermark_id?: string;
    readonly custom_json?: string;
    readonly build_beta_android?: string;
    readonly build_beta_ios?: string;
    readonly build_release_android?: string;
    readonly build_release_ios?: string;
    readonly build_custom_android?: string;
    readonly build_custom_ios?: string;
}

export class Application extends PlattarBase {

    public static get type(): string {
        return "application";
    }

    public get attributes(): ApplicationAttributes {
        return super.attributes;
    }

    public set attributes(attr: ApplicationAttributes) {
        super.attributes = attr;
    }
}