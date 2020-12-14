import { PlattarBase } from "./../interfaces/plattar-base";

export abstract class Page extends PlattarBase {
    static type(): "page";

    get attributes(): any;
    set overrideAttributes(attributes: any);
}