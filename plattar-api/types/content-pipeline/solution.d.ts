import { PlattarBase } from "../interfaces/plattar-base";

export class Solution extends PlattarBase {
    static type(): "solution";

    get attributes(): any;
    set overrideAttributes(attributes: any);
}