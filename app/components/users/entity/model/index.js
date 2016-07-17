'use strict';

function Model(Application, Repository) {

    let instance = null;

    function set(model) {
        return instance = model;
    }

    function get() {
        return instance;
    }

    return {
        schema: require('./schema')(Application, Repository),
        set:    set,
        get:    get
    };
}

module.exports = Model;