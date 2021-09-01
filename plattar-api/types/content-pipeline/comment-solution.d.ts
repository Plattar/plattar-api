import { PlattarBase } from "../interfaces/plattar-base";

export class CommentSolution extends PlattarBase {
    static type(): "commentsolution";

    get attributes(): any;
    set overrideAttributes(attributes: any);
}