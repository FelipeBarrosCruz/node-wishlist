'use strict';

function Test(Repository) {

    function loadUnitTest(name) {
        return require(`./src/${name}`)(Repository)
    }

    return {
        authorize: loadUnitTest('authorize')
    };
}

module.exports = Test;