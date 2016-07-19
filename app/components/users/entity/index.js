'use strict';

function Entity(Application, Repository) {

    let Model = require('./model')(Application, Repository);

    function requireSrc(name) {
        return require(`./src/${name}`)(Repository, Model)
    }


    return {
        model: Model,
        src: {
            authorize:  requireSrc('authorize'),
            create:     requireSrc('create'),
            select:     requireSrc('select'),
            update:     requireSrc('update'),
            delete:     requireSrc('delete')
        }
    };
}

module.exports = Entity;