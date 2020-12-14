import { CardBase } from "./card-base";

export class CardIFrame extends CardBase {
    static type(): "cardiframe";

    get attributes(): any;
    set overrideAttributes(attributes: any);
}