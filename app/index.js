'use strict';

function requireComponent(component) {
    return require(`./components/${component}`);
};

const COMPONENTS = [
    'auth',
    'users'
];

let response = {}

COMPONENTS.map((component) => {
    response[component] = requireComponent(component);
});

module.exports = response;