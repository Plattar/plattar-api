const got = require('got');

'use strict';
const PlattarObject = require('./interfaces/plattar-object.js');

class Project extends PlattarObject {
    constructor(server, id) {
        super(server, id, Project.type());
    }

    static type() {
        return 'application';
    }

    static get(server, id) {
        return new Project(server, id).get();
    }
}

module.exports = Project;