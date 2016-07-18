'use strict';

function Test(Repository) {

    function loadUnitTest(name) {
        return require(`./src/${name}`)(Repository)
    }

    return {
        searchByCep: loadUnitTest('search-by-cep')
    };
}

module.exports = Test;