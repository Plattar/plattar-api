const PlattarBase = require("../interfaces/plattar-base.js");
const Server = require("../../server/plattar-server.js");

class ProductBase extends PlattarBase {
    constructor(id, server) {
        super(id, server || Server.default());

        if (this.constructor === ProductBase) {
            throw new Error("ProductBase is abstract and cannot be created");
        }
    }

    static type() {
        const ProductVariation = require("./product-variation.js");
        const ProductAnnotation = require("./product-annotation.js");

        return [ProductAnnotation, ProductVariation];
    }
}

module.exports = ProductBase;