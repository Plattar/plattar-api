import { PlattarObject } from "./plattar-object";

export abstract class PlattarBase extends PlattarObject {
    constructor(id: string, server: Server | undefined = undefined);
}