import { PlattarBase } from "../interfaces/plattar-base";

export class Folder extends PlattarBase {
    static type(): "folder";

    get attributes(): any;
    set overrideAttributes(attributes: any);
}