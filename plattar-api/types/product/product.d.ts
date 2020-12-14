import { ProductBase } from "./product-base";

export class Product extends ProductBase {
    static type(): "product";

    get attributes(): any;
    set overrideAttributes(attributes: any);
}