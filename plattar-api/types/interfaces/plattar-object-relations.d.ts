import { PlattarObject } from "./plattar-object";

export class PlattarObjectRelations {
    constructor(parent: PlattarObject);

    get parent(): PlattarObject;
    filter<T extends PlattarObject>(obj: new (...args: [any]) => T, id: string | undefined = undefined): [T];
    find<T extends PlattarObject>(obj: new (...args: [any]) => T, id: string | null | undefined = null): T | undefined;
}