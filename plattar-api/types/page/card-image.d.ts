import { CardBase } from "./card-base";

export class CardImage extends CardBase {
    static type(): "cardimage";

    get attributes(): any;
    set overrideAttributes(attributes: any);
}