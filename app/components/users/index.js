'use strict';

function getRouter(Application, Repository) {
    let Router = require('express').Router();

    function requireRoute(route, security) {
        let Route = [
            require(`./route/${route}`)(Repository)
        ];
        return (security === false)
                ? Route
                : [Repository.get('security.jwtConfiguration')].concat(Route);
    }

    Router.get(
        '/',
        requireRoute('select', false)
    );

    Router.post(
        '/',
        requireRoute('create', false)
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

function getEntity(Application, Repository) {
    return require('./entity')(Application, Repository);
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