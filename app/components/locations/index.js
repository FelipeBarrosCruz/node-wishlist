'use strict';

function getRouter(Application, Repository) {
   return false;
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