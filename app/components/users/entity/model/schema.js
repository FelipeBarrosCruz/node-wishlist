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
                required: true
            },
            password: {
                type: 'string',
                required: true
            },
            address: {
                type: 'json',
                required: true
            }
        }
    });
}


module.exports = Schema;