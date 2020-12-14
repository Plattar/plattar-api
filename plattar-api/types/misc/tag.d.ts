import { PlattarBase } from "./../interfaces/plattar-base";

export class Tag extends PlattarBase {
    static type(): "tag";

    get attributes(): any;
    set overrideAttributes(attributes: any);
}