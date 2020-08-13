const got = require('got');

'use strict';
const PlattarObject = require('./interfaces/plattar-object.js');
const Server = require('./../server/plattar-server.js');

class Project extends PlattarObject {
    constructor(id, server) {
        super(id, server || Server.default(), Project.type());
    }

    static type() {
        return 'application';
    }
}

module.exports = Project;