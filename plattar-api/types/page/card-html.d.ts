import { CardBase } from "./card-base";

export class CardHTML extends CardBase {
    static type(): "cardhtml";

    get attributes(): any;
    set overrideAttributes(attributes: any);
}