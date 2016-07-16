'use strict';

module.exports = {
    env: 'development',
    application: {
        port: 3000
    },
    jwt: {
        secret: '5325b30a17bcfd8b1dfad051ba96174598b80b05',
        unless: [
            '/users/login',
            '/users/status'
        ]
    }
};