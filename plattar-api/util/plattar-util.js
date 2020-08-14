'use strict';

const Project = require('./../types/project.js');

// import Scene types and its children
const Scene = require('./../types/scene/scene.js');

// import Page types and its children
const Page = require('./../types/page/page.js');
const CardButton = require('./../types/page/card-button.js');
const CardHTML = require('./../types/page/card-html.js');
const CardIFrame = require('./../types/page/card-iframe.js');

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
            case CardButton.type(): return new CardButton(id, server);
            case CardHTML.type(): return new CardHTML(id, server);
            case CardIFrame.type(): return new CardIFrame(id, server);
            default: throw new Error('PlattarUtil.create(type, id, server) - provided type of \'' + type + '\' does not exist');
        }
    }
}

module.exports = PlattarUtil;