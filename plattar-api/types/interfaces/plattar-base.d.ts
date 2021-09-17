import { PlattarObject } from "./plattar-object";

export abstract class PlattarBase extends PlattarObject {
    constructor(id: string | undefined = undefined, server: Server | undefined = undefined);
}