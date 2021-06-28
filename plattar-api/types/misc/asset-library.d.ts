import { PlattarBase } from "./../interfaces/plattar-base";

export class AssetLibrary extends PlattarBase {
    static type(): "assetlibrary";

    get attributes(): any;
    set overrideAttributes(attributes: any);
}