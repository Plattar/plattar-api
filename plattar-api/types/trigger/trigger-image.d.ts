import { PlattarBase } from "../interfaces/plattar-base";

export class TriggerImage extends PlattarBase {
    static type(): "triggerimage";

    get attributes(): any;
    set overrideAttributes(attributes: any);
}