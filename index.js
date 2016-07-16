'use strict';

const ENV = process.env.NODE_ENV || 'development';

let Application = require('./src/ApplicationServer');

Application(require(`./env/${ENV}`)).onReady((Server, APP_PORT) => {
    Server.listen(APP_PORT, () => {
        console.log(`Application Server start`);
        console.log(`Application run on ${APP_PORT}`);
    });
});