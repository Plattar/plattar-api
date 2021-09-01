const PlattarBase = require("../interfaces/plattar-base");

class CommentSolution extends PlattarBase {
    static type() {
        return "commentsolution";
    }
}

module.exports = CommentSolution;