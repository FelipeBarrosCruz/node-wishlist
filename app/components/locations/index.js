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
        '/:cep',
        requireRoute('select', false)
    );

    return Router;
};

function getEntity(Application, Repository) {
    return false;
}

function getHelper(Application, Repository) {
    return require('./helper')(Application, Repository);
}

function Component(Application, Repository) {
    return {
        router: getRouter(Application, Repository),
        entity: getEntity(Application, Repository),
        helper: getHelper(Application, Repository)
    };
};

module.exports = Component;