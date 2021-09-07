import { PlattarObject } from "../core/plattar-object";
import { PlattarServer } from "../server/plattar-server";

/**
 * Contains Utility functions used internally by the Plattar API SDK
 */
export class Util {

    /**
     * 
     * @param type - (string) the type of object to create
     * @param id - (string) the id of the object
     * @param server - (optional) the server this object belongs in
     * @returns - New PlattarObject instance
     */
    public static create(type: string, id: string, server: PlattarServer): PlattarObject {
        // dynamic class matching from a string type
        const _DynamicClass = Util.match(type);

        return new _DynamicClass(id, server);
    }

    /**
     * Dynamic class matching provided an object type as a string
     * @param type - The type of class to construct
     * @returns - The instance of the class
     */
    public static match(type: string): any {
        switch (type) {
            default: throw new Error("Util.match(type) - provided type of \"" + type + "\" does not exist and cannot be created");
        }
    };
}