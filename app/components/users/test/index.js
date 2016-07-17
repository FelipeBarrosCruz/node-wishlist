'use strict';

function Test(Repository) {

    function loadUnitTest(name) {
        return require(`./src/${name}`)(Repository)
    }

    return {};
}

module.exports = Test;