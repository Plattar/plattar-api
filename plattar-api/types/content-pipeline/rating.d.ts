import { PlattarBase } from "../interfaces/plattar-base";

export class Rating extends PlattarBase {
    static type(): "rating";

    get attributes(): any;
    set overrideAttributes(attributes: any);
}