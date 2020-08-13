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

    static get(id, server) {
        return new Project(id, server || Server.default()).get();
    }
}

module.exports = Project;