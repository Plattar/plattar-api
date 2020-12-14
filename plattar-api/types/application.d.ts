import { PlattarBase } from "./interfaces/plattar-base";

export interface ApplicationAttributes {
    readonly created_at?: string;
    readonly updated_at?: string;
    readonly deleted_at?: string;

    readonly title?: string;
    readonly theme?: string;
    readonly color_primary?: string;
    readonly scan_prompt_image_id?: string;
    readonly parent_application_id?: string;
    readonly google_analytics_token?: string;
    readonly splash_image_id?: string;
    readonly short_id?: string;
    readonly watermark_id?: string;
    readonly custom_json?: any;
    readonly camera_help_image_id?: string;
    readonly feature_flags?: string;
    readonly build_beta_android?: string;
    readonly build_beta_ios?: string;
    readonly build_release_android?: string;
    readonly build_release_ios?: string;
    readonly build_custom_android?: string;
    readonly build_custom_ios?: string;
    readonly plattar_team_id?: string;
    readonly icon_id?: string;
}

export class Application extends PlattarBase {
    static type(): "application";

    get attributes(): ApplicationAttributes;
    set overrideAttributes(attributes: ApplicationAttributes);
}