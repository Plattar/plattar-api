'use strict';

const Project = require('./../types/project.js');
const Scene = require('./../types/scene/scene.js');
const Page = require('./../types/page/page.js');

class PlattarUtil {

    /**
     * @param {*} type (string) the type of object to create
     * @param {*} id (string) the id of the object
     * @param {*} server (optional) the server this object belongs in
     */
    static create(type, id, server) {
        switch (type) {
            case Project.type(): return new Project(id, server);
            case Scene.type(): return new Scene(id, server);
            case Page.type(): return new Page(id, server);
            default: throw new Error('PlattarUtil.create(type, id, server) - provided type of \'' + type + '\' does not exist');
        }
    }
}

module.exports = PlattarUtil;