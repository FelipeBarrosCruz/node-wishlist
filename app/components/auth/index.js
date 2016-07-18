'use strict';

function getRouter(Application, Repository) {
    let Router = require('express').Router();

    function requireRoute(route) {
        return [
            require(`./route/${route}`)(Repository)
        ];
    }

    Router.post(
        '/',
        requireRoute('authorize')
    );

    return Router;
};

function getEntity(Application, Repository) {
    return false;
}

function getHelper(Application, Repository) {
    return false;
}

function Component(Application, Repository) {
    return {
        router: getRouter(Application, Repository),
        entity: getEntity(Application, Repository),
        helper: getHelper(Application, Repository)
    };
};

module.exports = Component;