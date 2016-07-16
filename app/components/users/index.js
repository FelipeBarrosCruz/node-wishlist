'use strict';

function Module(configuration) {
    let Router = require('express').Router();

    function requireRoute(route) {
        return [
            configuration.jwt,
            require(`./route/${route}`)
        ];
    }

    Router.get(
        '/',
        requireRoute('select')
    );

    Router.post(
        '/',
        requireRoute('create')
    );

    Router.put(
        '/',
        requireRoute('update')
    );

    Router.delete(
        '/',
        requireRoute('delete')
    );

    return Router;
};

module.exports = Module;