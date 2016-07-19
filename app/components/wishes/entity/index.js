'use strict';

function Entity(Application, Repository) {

    let Model = require('./model')(Application, Repository);

    function requireSrc(name, Model) {
        return require(`./src/${name}`)(Repository, Model)
    }


    return {
        model: Model,
        src: {
            create: requireSrc('create', Model),
            update: requireSrc('update', Model),
            select: requireSrc('select', Model),
            delete: requireSrc('delete', Model),
        }
    };
}

module.exports = Entity;