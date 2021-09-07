import { PlattarServer } from "../server/plattar-server";
import { Util } from "../util/util";
import { PlattarObjectRelations } from "./plattar-object-relations";
import { PlattarQuery } from "./plattar-query";

export abstract class PlattarObject {
    public abstract get id(): string;
    public abstract get type(): string | Array<string>;
    public abstract get attributes(): any;
    public abstract set attributes(attr: any);
    public abstract get meta(): any;
    public abstract get query(): PlattarQuery;
    public abstract get relationships(): PlattarObjectRelations;

    public static get type(): string | Array<string> {
        throw new Error("PlattarObject.type - not implemented");
    }

    /**
     * Checks if the provided Object is a Plattar Object
     * @param obj - the object to check
     * @returns true or false
     */
    public static isPlattarObject(obj: any | undefined | null = null): boolean {
        if (!obj) {
            return false;
        }

        if (obj.prototype && obj.prototype instanceof PlattarObject) {
            return true;
        }

        if (obj instanceof PlattarObject) {
            return true;
        }

        return false;
    }

    /**
     * Reconstruct this PlattarObject instance from the provided JSON. This JSON
     * is from the Plattar API.
     * 
     * This function will clear the internal state of this object
     * 
     * @param json - The JSON Object to construct this object from
     */
    public construct(json: any): void {
        this.attributes = json.data.attributes;
        const server: PlattarServer = this.query.server;

        // fill the relationships for the object
        if (json.data.relationships) {
            for (const [key, value] of Object.entries(json.data.relationships)) {
                const data = (<any>value).data;

                if (Array.isArray(data)) {
                    data.forEach((item: any) => {
                        const construct: PlattarObject = Util.create(key, item.id, server);
                        construct.attributes = item.attributes || {};

                        this.relationships.put(construct);
                    });
                }
                else {
                    const construct: PlattarObject = Util.create(key, data.id, server);
                    construct.attributes = data.attributes || {};

                    this.relationships.put(construct);
                }
            }
        }

        // loop through the includes and populate as required
        if (json.included) {
            json.included.forEach((item: any) => {
                const existing: PlattarObject | null = this.relationships.find<PlattarObject>(Util.match(item.type), item.id);

                if (existing) {
                    existing.construct({
                        data: item,
                        included: json.included
                    });
                }
            });
        }
    }
}