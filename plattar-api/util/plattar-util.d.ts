import { PlattarServer as Server } from "../server/plattar-server";
import { PlattarObject } from "../types/interfaces/plattar-object";

export class PlattarUtil {
    static isPlattarObject(obj: any | undefined = undefined): boolean;
    static create(type: string, id: string, server: Server): PlattarObject;
}