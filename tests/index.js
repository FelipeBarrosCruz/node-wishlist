'use strict';

const ENV = process.env.NODE_ENV || 'testing';

let Configuration     = require(`../env/${ENV}`);
let Colors            = require('colors');
let ApplicationServer = require('../src/ApplicationServer');
let Application       = ApplicationServer(Configuration);

function loaderTestComponent(name, repository) {
    return require(`../app/components/${name}/test`)(repository);
}

var should = require('chai').should();

describe('Set up the application', function () {

    before(function (done) {
        Application.onReady((Server, Repository) => {
            this.repository = Repository;
            return done(null);
        });
    });

    describe('Set up tests of Locations component', function () {
        it('Running locations tests', function () {
            try {
                return loaderTestComponent('locations', this.repository);
            } catch(err) {
                (err === null).should.equal(true);
            }
        });
    });


    describe('Set up tests of Auth component', function () {
        it('Running Auth tests', function () {
            try {
                return loaderTestComponent('auth', this.repository);
            } catch(err) {
                (err === null).should.equal(true);
            }
        });
    });


    describe('Set up tests of Users component', function () {
        it('Running users tests', function () {
            try {
                return loaderTestComponent('users', this.repository);
            } catch(err) {
                (err === null).should.equal(true);
            }
        });
    });
});
