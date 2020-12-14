import { CardBase } from "./card-base";

export class CardYoutube extends CardBase {
    static type(): "cardyoutube";

    get attributes(): any;
    set overrideAttributes(attributes: any);
}