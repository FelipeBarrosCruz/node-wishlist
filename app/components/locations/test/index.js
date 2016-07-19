'use strict';

function Test(Repository) {

    var should = require('chai').should();

    describe('Testing locations component', function() {

        beforeEach(function() {
            this.locationHelper = Repository.get('app.helper.locations');
            this.cep = '01311300';
        });

        it('Should search an address by cep', function (done) {
          this.locationHelper.searchByCEP({
                cep: this.cep
            }, (err, status, result) => {
                (err === null).should.equal(true);
                status.should.equal(true);;
                return done(err);
            });
        });
    });
}

module.exports = Test;