import { CardBase } from "./card-base";

export class CardParagraph extends CardBase {
    static type(): "cardparagraph";

    get attributes(): any;
    set overrideAttributes(attributes: any);
}