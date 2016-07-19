'use strict';

function Schema(Application, Repository) {

    let Waterline = require('waterline');

    return Waterline.Collection.extend({
        identity: 'wishes',
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
            userId: {
                model: 'users'
            },
            name: {
                type: 'string',
                required: true
            },
            description: {
                type: 'string',
                required: true
            },
            amount: {
                type: 'float',
                required: true
            }
        }
    });
}


module.exports = Schema;