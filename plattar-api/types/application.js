'use strict';
const PlattarBase = require('./interfaces/plattar-base.js');

class Application extends PlattarBase { }

Application.type = () => {
    return 'application';
};

module.exports = Application;