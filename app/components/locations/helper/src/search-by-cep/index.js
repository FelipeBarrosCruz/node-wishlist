'use strict';

function ModelAction(Repository) {

    return (data, cb) => {
        let Configuration = require('./config.json');
        let Request       = require('request');

        let Url = [Configuration.apiUrl, data.cep].join('/');

        Request(Url, (err, response, body) => {
            return cb(err, (err ? false : true), body);
        });
    };
}

module.exports = ModelAction;