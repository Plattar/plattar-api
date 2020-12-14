export interface ServerType {
    readonly api: string;
    readonly cdn: string;
    readonly type: string;
}

export interface ServerOptions {
    readonly validate: boolean;
}

export interface ServerAuth {
    readonly "plattar-auth-token": string;
}

export class PlattarServer {
    constructor();
    get prod(): ServerType;
    get staging(): ServerType;
    get dev(): ServerType;
    get isProd(): boolean;
    get isStaging(): boolean;
    get isDev(): boolean;
    get authToken(): ServerAuth;
    get originLocation(): ServerType;
    auth(token: string, opt: ServerOptions | undefined = undefined): Promise<PlattarServer>;
    origin(server: ServerType, opt: ServerOptions | undefined = undefined): Promise<PlattarServer>;
    static match(serverName: string): ServerType;
    static create(origin: ServerType | undefined = undefined, auth: string | undefined = undefined): PlattarServer;
    static disableTLS(): void;
    static default(): PlattarServer;
}