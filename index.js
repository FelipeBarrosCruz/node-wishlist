'use strict';

const ENV = process.env.NODE_ENV || 'development';

let Configuration     = require(`./env/${ENV}`);
let Colors            = require('colors');
let ApplicationServer = require('./src/ApplicationServer');
let Application       = ApplicationServer(Configuration);

Application.onReady((Server, Repository) => {
    return console.log('....... DONE .......');
});

module.exports = Application;