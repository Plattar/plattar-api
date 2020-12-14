import { CardBase } from "./card-base";

export class CardSlider extends CardBase {
    static type(): "cardslider";

    get attributes(): any;
    set overrideAttributes(attributes: any);
}