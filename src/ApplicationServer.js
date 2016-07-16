'use strict';
let Express     = require('express'),
    BodyParser  = require('body-parser'),
    ExpressCors = require('cors'),
    ExpressJwt  = require('express-jwt');

function ApplicationServer(configuration) {
    let Application = Express(),
        Errors      = ((list) => {
            let response = {};
            list.map((error) => {
                response[error] = require(`./errors/${error}`);
            })
            return response;
        })([401, 404]);

    Application.use(BodyParser.urlencoded({
        extended: false
    }));

    Application.use(BodyParser.json());

    Application.use(ExpressCors());

    Application.use(ExpressJwt({
        secret: configuration.jwt.secret,
        getToken: (req) => {
            return req.headers.bearer || null;
        }
    }).unless(configuration.jwt.unless));

    Application.use(Errors['401']);
    Application.use(Errors['404']);


    if (configuration.env === 'development') {
        let Morgan = require('morgan');
        Application.use(Morgan('dev'));
    }

    function onReady(cb) {
        return cb(Application, configuration.application.port);
    }

    return {
        onReady: onReady
    };
}

module.exports = ApplicationServer;