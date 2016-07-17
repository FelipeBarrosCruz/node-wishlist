'use strict';

module.exports = {
    env: 'production',
    application: {
        port: 80,
        dir: __dirname.concat('/../app')
    },
    jwt: {
        secret: '5325b30a17bcfd8b1dfad051ba96174598b80b05',
        unless: []
    }
};