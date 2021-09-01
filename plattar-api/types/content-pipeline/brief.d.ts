import { PlattarBase } from "../interfaces/plattar-base";

export class Brief extends PlattarBase {
    static type(): "brief";

    get attributes(): any;
    set overrideAttributes(attributes: any);
}