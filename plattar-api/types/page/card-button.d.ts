import { CardBase } from "./card-base";

export class CardButton extends CardBase {
    static type(): "cardbutton";

    get attributes(): any;
    set overrideAttributes(attributes: any);
}