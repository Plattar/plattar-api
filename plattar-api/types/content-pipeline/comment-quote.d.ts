import { PlattarBase } from "../interfaces/plattar-base";

export class CommentQuote extends PlattarBase {
    static type(): "commentquote";

    get attributes(): any;
    set overrideAttributes(attributes: any);
}