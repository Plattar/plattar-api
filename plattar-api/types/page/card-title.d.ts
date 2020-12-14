import { CardBase } from "./card-base";

export class CardTitle extends CardBase {
    static type(): "cardtitle";

    get attributes(): any;
    set overrideAttributes(attributes: any);
}