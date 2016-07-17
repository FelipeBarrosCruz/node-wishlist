'use strict';

function Entity(Application, Repository) {

    function requireSrc(name, Model) {
        return require(`./src/${name}`)(Repository, Model)
    }

    let Model = require('./model')(Application, Repository);

    return {
        model: Model,
        src: {
            authorize:  requireSrc('authorize', Model),
            create:     requireSrc('create', Model),
            select:     requireSrc('select', Model),
            update:     requireSrc('update', Model),
            delete:     requireSrc('delete', Model)
        }
    };
}

module.exports = Entity;