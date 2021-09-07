import { PlattarObject } from "./plattar-object";

/**
 * Manages a list of all known objects related/linked with a particular PlattarObject.
 */
export class PlattarObjectRelations {

    private readonly _relations: Map<string, Array<PlattarObject>>;

    constructor() {
        this._relations = new Map<string, Array<PlattarObject>>();
    }

    /**
     * Insert a single object as a relationship to the current list
     * @param obj - The object to insert
     * @returns 
     */
    public put<T extends PlattarObject>(obj: T | null | undefined = null): void {
        if (!obj) {
            return;
        }

        // we only accept PlattarObject types
        if (!PlattarObject.isPlattarObject(obj)) {
            throw new Error("PlattarObjectRelations.put(PlattarObject) - argument must be type of PlattarObject");
        }

        const type: string | Array<string> = obj.type;

        if (Array.isArray(type)) {
            throw new Error("PlattarObjectRelations.put(PlattarObject) - argument cannot be a baseline PlattarObject type");
        }

        const object: Array<PlattarObject> | undefined = this._relations.get(type);

        if (!object) {
            const newObject: Array<PlattarObject> = new Array<PlattarObject>();
            newObject.push(obj);

            this._relations.set(type, newObject);

            return;
        }

        object.push(obj);
    }

    /**
     * Compose and returns a list of objects that matches the provided Query. 
     * @param obj - The object type to filter against
     * @param id - (optional) The ID of the object to use for the filter
     * @param opt - (optional) Objects will be added to this array instance
     * @returns - The composed array of objects
     */
    public filter<T extends PlattarObject>(obj: T, id: string | null | undefined = null, opt: Array<T> | undefined | null = null): Array<T> {
        // we only accept PlattarObject types
        if (!PlattarObject.isPlattarObject(obj)) {
            throw new Error("PlattarObjectRelations.filter(PlattarObject) - argument must be type of PlattarObject");
        }

        const compiledList: Array<T> = opt || new Array<T>();
        const type: string | Array<string> = obj.type;

        // for array objects, we do each individual object
        if (Array.isArray(type)) {
            type.forEach((inObject: string) => {
                const object: Array<PlattarObject> | undefined = this._relations.get(inObject);

                if (object) {
                    object.forEach((obj: PlattarObject) => {
                        if (!id) {
                            compiledList.push(<T>obj);
                        }
                        else if (obj.id === id) {
                            compiledList.push(<T>obj);
                        }
                    });
                }
            });

            return compiledList;
        }

        // otherwise, we just need to seek one object type
        const object: Array<PlattarObject> | undefined = this._relations.get(type);

        if (object) {
            object.forEach((obj: PlattarObject) => {
                if (!id) {
                    compiledList.push(<T>obj);
                }
                else if (obj.id === id) {
                    compiledList.push(<T>obj);
                }
            });
        }

        return compiledList;
    }

    /**
     * Compose and returns the first object that matches the provided Query.
     * @param obj - The object type to filter against
     * @param id - (optional) The ID of the object to use for the filter
     * @returns - The found object or null if not found
     */
    public find<T extends PlattarObject>(obj: T, id: string | null | undefined = null): T | null {
        if (id === undefined) {
            return null;
        }

        const list: Array<T> = this.filter(obj, id);

        if (list.length <= 0) {
            return null;
        }

        return list[0];
    }
}