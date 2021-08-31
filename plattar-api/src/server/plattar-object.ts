export abstract class PlattarObject {
    public abstract get id(): string;
    public abstract get type(): string | Array<string>;
    public abstract get attributes(): any;
    public abstract set attributes(attr: any);
    public abstract get meta(): any;

    /**
     * Checks if the provided Object is a Plattar Object
     * @param obj - the object to check
     * @returns true or false
     */
    public static isPlattarObject(obj: any | undefined | null = null): boolean {
        if (!obj) {
            return false;
        }

        if (obj && obj.prototype && obj.prototype instanceof PlattarObject) {
            return true;
        }

        if (obj && obj instanceof PlattarObject) {
            return true;
        }

        return false;
    }
}