import { PlattarBase } from "./../interfaces/plattar-base";
import { PlattarServer as Server } from "./../../server/plattar-server";

export abstract class SceneBase extends PlattarBase {
    constructor(id: string, server: Server | undefined = undefined);
    static type(): { new(): SceneBase; }[];
}