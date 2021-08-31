import { PlattarObject } from "../server/plattar-object";

export class Util {
    public static reconstruct(parent: PlattarObject, json: any): void {
        parent.attributes = json.data.attributes;

        const server = parent._query.server;

        // fill the relationships for the object
        if (json.data.relationships) {
            for (const [key, value] of Object.entries(json.data.relationships)) {
                const data = value.data;

                if (Array.isArray(data)) {
                    data.forEach((item) => {
                        const construct = PlattarUtil.create(key, item.id, server);
                        construct._attributes = item.attributes || {};

                        parent.relationships._put(construct);
                    });
                }
                else {
                    const construct = PlattarUtil.create(key, data.id, server);
                    construct._attributes = data.attributes || {};

                    parent.relationships._put(construct);
                }
            }
        }

        // loop through the includes and populate as required
        if (json.included) {
            json.included.forEach((item) => {
                const existing = parent.relationships.find(PlattarUtil.match(item.type), item.id);

                if (existing) {
                    PlattarUtil.reconstruct(existing, {
                        data: item,
                        included: json.included
                    }, options);
                }
            });
        }
    };

    /**
     * Used to dynamically match types from the Plattar API into class objects
     * Throws an Error if the provided type does not exit.
     * 
     * @param {*} type (string) the type of object to create
     * @param {*} id (string) the id of the object
     * @param {*} server (optional) the server this object belongs in
     */
    PlattarUtil.create = (type, id, server) => {
        // dynamic class matching from a string type
        const _DynamicClass = PlattarUtil.match(type);

        return new _DynamicClass(id, server);
    };
}