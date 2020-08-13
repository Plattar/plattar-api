const got = require('got');

'use strict';
const PlattarServer = require('./server/plattar-server.js');
const Project = require('./types/project.js');

// create a default server instance to be used globally
PlattarServer.create();

module.exports = {
    Server: PlattarServer,
    Project: Project
}