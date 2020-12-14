import { PlattarBase } from "./../interfaces/plattar-base";

export class ScriptEvent extends PlattarBase {
    static type(): "scriptevent";

    get attributes(): any;
    set overrideAttributes(attributes: any);
}