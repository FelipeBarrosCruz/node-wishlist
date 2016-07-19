'use strict';

function Schema(Application, Repository) {

    let Waterline = require('waterline');

    return Waterline.Collection.extend({
        identity: 'users',
        connection: 'default',
        autoCreatedAt: true,
        autoUpdatedAt: true,
        attributes: {
            id: {
                type: 'integer',
                primaryKey: true,
                unique: true,
                autoIncrement: true
            },
            name: {
                type: 'string',
                required: true
            },
            email: {
                type: 'string',
                email: true,
                required: true
            },
            password: {
                type: 'string',
                required: true
            },
            address: {
                type: 'json',
                required: true
            },
            wishes: {
                collection: 'wishes',
                via:        'userId'
            }
        }
    });
}


module.exports = Schema;