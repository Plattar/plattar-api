const ProductBase = require("./product-base.js");

class ProductAnnotation extends ProductBase {
    static type() {
        return "productannotation";
    }
}

module.exports = ProductAnnotation;