import { PlattarBase } from "./../interfaces/plattar-base";

export class AsyncJob extends PlattarBase {
    static type(): "asyncjob";

    get attributes(): any;
    set overrideAttributes(attributes: any);
    set accessKey(code: string): void;
}