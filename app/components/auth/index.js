'use strict';

function Module(configuration) {
    let Router = require('express').Router();

    function requireRoute(route) {
        return require(`./route/${route}`)
    }

    Router.post(
        '/',
        requireRoute('authorization')
    );

    return Router;
};

module.exports = Module;