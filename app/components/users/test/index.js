'use strict';

function Test(Repository) {

    function loadUnitTest(name) {
        return require(`./src/${name}`)(Repository)
    }

    return {
        create: loadUnitTest('create'),
        update: loadUnitTest('update'),
        select: loadUnitTest('select'),
        delete: loadUnitTest('delete')
    };
}

module.exports = Test;