import { PlattarBase } from "../interfaces/plattar-base";

export class CommentBrief extends PlattarBase {
    static type(): "commentbrief";

    get attributes(): any;
    set overrideAttributes(attributes: any);
}