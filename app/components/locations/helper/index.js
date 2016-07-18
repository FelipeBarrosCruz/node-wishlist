'use strict';

function Helper(Application, Repository) {

    function requireSrc(name) {
        return require(`./src/${name}`)(Repository)
    }

    return {
        searchByCEP: requireSrc('search-by-cep'),
    };
}

module.exports = Helper;