const got = require('got');

'use strict';
const PlattarServer = require('./server/plattar-server.js');
const PlattarUtil = require('./util/plattar-util.js');
const Project = require('./types/project.js');
const Scene = require('./types/scene/scene.js');
const Page = require('./types/page/page.js');

// create a default server instance to be used globally
PlattarServer.create();

module.exports = {
    Server: PlattarServer,
    Util: PlattarUtil,
    Project: Project,
    Scene: Scene,
    Page: Page
}