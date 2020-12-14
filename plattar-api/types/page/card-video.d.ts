import { CardBase } from "./card-base";

export class CardVideo extends CardBase {
    static type(): "cardvideo";

    get attributes(): any;
    set overrideAttributes(attributes: any);
}