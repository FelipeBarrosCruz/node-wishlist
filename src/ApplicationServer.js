'use strict';
let Express     = require('express'),
    BodyParser  = require('body-parser'),
    ExpressCors = require('cors'),
    ExpressJwt  = require('express-jwt');

function ApplicationServer(configuration) {
    let Application           = Express(),
        Morgan                = require('morgan'),
        Helmet                = require('helmet'),
        Async                 = require('async'),
        JwtSignIn             = require('jsonwebtoken'),
        JwtSignOut            = require('express-jwt-blacklist'),
        Waterline             = require('waterline'),
        WaterlinePostgres     = require('sails-postgresql'),
        ApplicationLoader     = require('./ApplicationLoader'),
        ApplicationRepository = require('./ApplicationRepository');

    /*
     * @Description: Configure Waterline Database ORM
     * @Reference: https://github.com/balderdashy/waterline-docs
     * @Reference: https://github.com/balderdashy/sails-postgresql
    */
    let Database = {
        instance:      new Waterline(),
        configuration: {
            adapters: {
                postgres: WaterlinePostgres
            },
            connections: {
                default: {
                    adapter:    'postgres',
                    host:       configuration.db.host,
                    user:       configuration.db.user,
                    port:       configuration.db.port,
                    password:   configuration.db.password,
                    database:   configuration.db.database
                }
            }
        }
    };

    ApplicationRepository.set('database.waterline', Database);

    /*
     * @Description: Using morgan to debug requests if is in devlopment mode;
     *               Case is in production, compress the request;
     * @Reference: https://github.com/expressjs/morgan
    */
    Application.use(Morgan(
        configuration.env !== 'development'
        ? 'compress'
        : 'dev'
    ));

    /*
     * @Description: Security HTTP Package for Express.
     * @Reference: https://github.com/helmetjs/helmet
    */
    Application.use(Helmet.frameguard());
    Application.use(Helmet.xssFilter());
    Application.use(Helmet.noSniff());

    /*
     * @Description: Configure ExpressJwt
     * @Referece: https://github.com/auth0/express-jwt
    */
    let JwtConfiguration = ExpressJwt({
        secret: configuration.jwt.secret,
        isRevoked: JwtSignOut.isRevoked,
        getToken: (req) => {
            return req.headers.bearer || null;
        }
    }).unless(configuration.jwt.unless);
    ApplicationRepository.set('security.jwtConfiguration', JwtConfiguration);

    /*
     * @Description: Set JwtSign function to generate token
     * @Reference: https://github.com/auth0/node-jsonwebtoken
    */
    ApplicationRepository.set('security.jwtSignIn', (user) => {
        return JwtSignIn.sign(user, configuration.jwt.secret);
    });

    /*
     * @Description: Set JwtSign function to generate token
     * @Reference: https://github.com/auth0/node-jsonwebtoken
    */
    ApplicationRepository.set('security.jwtSignOut', (user) => {
        return JwtSignOut.revoke(user);
    });

    /*
     * @Description: Generate errors midlewares;
     * @Reference: https://expressjs.com/guide/using-middleware.html
    */
    let Errors = ((list) => {
        let response = {};
        list.map((error) => {
            response[error] = require(`./errors/${error}`);
        })
        return response;
    })([401, 404]);

    /*
     * @Description: Configure Express BodyParser
     * @Reference: https://github.com/expressjs/body-parser
    */
    Application.use(BodyParser.urlencoded({
        extended: false
    }));
    Application.use(BodyParser.json());

    /*
     * @Description: Configure Cors
     * @Reference: https://github.com/expressjs/cors
    */
    Application.use(ExpressCors());

    let ApplicationTasks = [];

    ApplicationTasks.push((doNext) => {
        return ApplicationLoader({
            application:    Application,
            configuration:  configuration,
            repository:     ApplicationRepository
        }, (err) => {
            return doNext(err);
        });
    });

    /*
     * @Description: Configure security midlewares
    */
    ApplicationTasks.push((doNext) => {
        /*
         * @Description: Apply Jwt midleware into app
        */
        Application.use(JwtConfiguration);

        /*
         * @Description: Apply unauthorized error midleware into app
        */
        Application.use(Errors['401']);

        /*
         * @Description: Apply not found route error midleware into app
        */
        Application.use(Errors['404']);

        return doNext(null);
    });

    function onReady(cb) {
        Async.waterfall(ApplicationTasks, (err) => {
            if (err) {
                throw err;
            }

            Application.listen(configuration.application.port, () => {

                if (configuration.env === 'development') {
                    console.log("Application Server start".green);
                    console.log("Application run on".green + " [%s] \n".yellow, configuration.application.port);
                }

                return cb(Application, ApplicationRepository);
            });
        });
    }

    function getRepository() {
        return ApplicationRepository;
    }

    return {
        onReady: onReady,
        getRepository: getRepository
    };
}

module.exports = ApplicationServer;