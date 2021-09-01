import { PlattarBase } from "../interfaces/plattar-base";

export class Quote extends PlattarBase {
    static type(): "quote";

    get attributes(): any;
    set overrideAttributes(attributes: any);
}