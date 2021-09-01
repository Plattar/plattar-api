const PlattarBase = require("../interfaces/plattar-base");

class CommentQuote extends PlattarBase {
    static type() {
        return "commentquote";
    }
}

module.exports = CommentQuote;