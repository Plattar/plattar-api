import { PlattarServer as Server } from "../../server/plattar-server";
import { PlattarObjectRelations } from "./plattar-object-relations";

export interface RequestOptions {
    readonly cache: boolean;
}

export abstract class PlattarObject {
    constructor(id: string, server: Server);
    invalidate(): void;
    get id(): string;
    get relationships(): PlattarObjectRelations;
    static include(...args: [any]): [string];
    include(...args: [any]): this;

    get(opt: RequestOptions | undefined = undefined): Promise<this>;
    update(): Promise<this>;
    create(): Promise<this>;
    delete(): Promise<this>;
}