import { PlattarServer } from "../server/plattar-server";
import { PlattarObject } from "./plattar-object";
import { PlattarObjectRelations } from "./plattar-object-relations";
import { PlattarQuery, QueryOptions } from "./plattar-query";

export interface BaseAttributes {
    readonly created_at?: string;
    readonly updated_at?: string;
    readonly deleted_at?: string;
}

export abstract class PlattarBase extends PlattarObject {

    private readonly _id: string;
    private readonly _meta: any;
    private readonly _query: PlattarQuery;
    private readonly _relationships: PlattarObjectRelations;

    protected _attributes: BaseAttributes;

    constructor(id: string, server: PlattarServer | null | undefined = null) {
        super();

        this._id = id;
        this._attributes = {};
        this._meta = {};
        this._query = new PlattarQuery(this, server);
        this._relationships = new PlattarObjectRelations();
    }

    public get id(): string {
        return this._id;
    }

    public get attributes(): BaseAttributes {
        return this._attributes;
    }

    public set attributes(attr: BaseAttributes) {
        this._attributes = Object.assign({}, attr);
    }

    public get meta(): any {
        return this._meta;
    }

    public get query(): PlattarQuery {
        return this._query;
    }

    public get relationships(): PlattarObjectRelations {
        return this._relationships;
    }

    public get type(): string | Array<string> {
        return (<any>this.constructor).type;
    }

    public get(opt: QueryOptions | null = null): Promise<this> {
        return <Promise<this>>this._query.get(opt);
    }

    public update(): Promise<this> {
        return <Promise<this>>this._query.update();
    }

    public create(): Promise<this> {
        return <Promise<this>>this._query.create();
    }

    public delete(): Promise<this> {
        return <Promise<this>>this._query.delete();
    }

    public static include(...args: [any]): Array<string | string[]> {
        if (!args || args.length <= 0) {
            return [];
        }

        const includes = [this.type];

        args.forEach((obj) => {
            // object passed is of PlattarObject type
            if (Array.isArray(obj)) {
                obj.forEach((strObject) => {
                    if (typeof strObject === "string" || strObject instanceof String) {
                        includes.push(`${this.type}.${strObject}`);
                    }
                    else {
                        throw new Error("PlattarObject." + this.type + ".include(...args) - argument of Array must only include Strings");
                    }
                });
            }
            else if (obj.prototype instanceof PlattarObject) {
                includes.push(`${this.type}.${obj.type}`);
            }
            else {
                throw new Error("PlattarObject." + this.type + ".include(...args) - argument must be of type PlattarObject or Array but was type=" + (typeof obj) + " value=" + obj);
            }
        });

        return includes;
    }

    public include(...args: [any]): this {
        this._query.include(args);

        return this;
    }
}