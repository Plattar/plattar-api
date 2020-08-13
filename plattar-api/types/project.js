const got = require('got');

'use strict';
const PlattarObject = require('./interfaces/plattar-object.js');
const Server = require('./../server/plattar-server.js');

class Project extends PlattarObject {
    constructor(id, server) {
        super(server || Server.default(), id, Project.type());
    }

    static type() {
        return 'application';
    }
}

module.exports = Project;