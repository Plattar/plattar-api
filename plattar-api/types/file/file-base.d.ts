import { PlattarBase } from "./../interfaces/plattar-base";
import { PlattarServer as Server } from "./../../server/plattar-server";

export abstract class FileBase extends PlattarBase {
    constructor(id: string, server: Server | undefined = undefined);
    static type(): { new(): FileBase; }[];

    get sourcePath(): string;
    get backupPath(): string;
    get path(): string;
}