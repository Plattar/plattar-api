import { ProductBase } from "./product-base";

export class ProductAnnotation extends ProductBase {
    static type(): "productannotation";

    get attributes(): any;
    set overrideAttributes(attributes: any);
}