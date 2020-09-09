const PlattarBase = require("../interfaces/plattar-base.js");
const Server = require("../../server/plattar-server.js");

class CardBase extends PlattarBase {
    constructor(id, server) {
        super(id, server || Server.default());

        if (this.constructor === CardBase) {
            throw new Error("CardBase is abstract and cannot be created");
        }
    }

    static type() {
        const CardButton = require("./card-button.js");
        const CardHTML = require("./card-html.js");
        const CardIFrame = require("./card-iframe.js");
        const CardImage = require("./card-image.js");
        const CardMap = require("./card-map.js");
        const CardParagraph = require("./card-paragraph.js");
        const CardRow = require("./card-row.js");
        const CardSlider = require("./card-slider.js");
        const CardTitle = require("./card-title.js");
        const CardVideo = require("./card-video.js");
        const CardYoutube = require("./card-youtube.js");

        return [CardButton, CardHTML, CardIFrame, CardImage, CardMap, CardParagraph, CardRow, CardSlider, CardTitle, CardVideo, CardYoutube];
    }
}

module.exports = CardBase;