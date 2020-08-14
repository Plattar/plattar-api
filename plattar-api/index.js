const got = require('got');

'use strict';
const PlattarServer = require('./server/plattar-server.js');
const PlattarUtil = require('./util/plattar-util.js');
const Application = require('./types/application.js');
const Scene = require('./types/scene/scene.js');

// import Page and its types
const Page = require('./types/page/page.js');
const CardButton = require('./types/page/card-button.js');
const CardHTML = require('./types/page/card-html.js');
const CardIFrame = require('./types/page/card-iframe.js');

// create a default server instance to be used globally
PlattarServer.create();

module.exports = {
    Server: PlattarServer,
    Util: PlattarUtil,
    Project: Application,
    Scene: Scene,
    Page: Page,
    CardButton: CardButton,
    CardHTML: CardHTML,
    CardIFrame: CardIFrame
}