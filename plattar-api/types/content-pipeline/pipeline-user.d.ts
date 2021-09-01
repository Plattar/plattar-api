import { PlattarBase } from "../interfaces/plattar-base";

export class PipelineUser extends PlattarBase {
    static type(): "pipelineuser";

    get attributes(): any;
    set overrideAttributes(attributes: any);
}