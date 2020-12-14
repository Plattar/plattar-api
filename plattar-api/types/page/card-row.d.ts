import { CardBase } from "./card-base";

export class CardRow extends CardBase {
    static type(): "cardrow";

    get attributes(): any;
    set overrideAttributes(attributes: any);
}