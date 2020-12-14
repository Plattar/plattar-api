import { CardBase } from "./card-base";

export class CardMap extends CardBase {
    static type(): "cardmap";

    get attributes(): any;
    set overrideAttributes(attributes: any);
}