'use strict';

module.exports = {
    env: 'testing',
    application: {
        port: 3000,
        dir: __dirname.concat('/../app')
    },
    jwt: {
        secret: '5325b30a17bcfd8b1dfad051ba96174598b80b05',
        unless: []
    },
    db: {
        host: 'node-wishlist.cwer2upqmp5c.us-west-2.rds.amazonaws.com',
        user: 'whishlist',
        port: 5432,
        password: '1q2w3e4r5t',
        database: 'whishlist'
    }
};