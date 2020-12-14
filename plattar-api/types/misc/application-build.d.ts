import { PlattarBase } from "./../interfaces/plattar-base";

export class ApplicationBuild extends PlattarBase {
    static type(): "applicationbuild";

    get attributes(): any;
    set overrideAttributes(attributes: any);
}