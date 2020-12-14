import { ProductBase } from "./product-base";

export class ProductVariation extends ProductBase {
    static type(): "productvariation";

    get attributes(): any;
    set overrideAttributes(attributes: any);
}