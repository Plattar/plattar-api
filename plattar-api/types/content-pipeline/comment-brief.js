const PlattarBase = require("../interfaces/plattar-base");

class CommentBrief extends PlattarBase {
    static type() {
        return "commentbrief";
    }
}

module.exports = CommentBrief;