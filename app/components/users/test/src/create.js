'use strict';


function UnitTest(Repository) {
    var should = require('chai').should();

    describe('User create', function() {

        beforeEach(function() {
            this.userEntity = Repository.get('app.entity.users');
            this.createData = {
                name: 'Felipe Barros',
                email: 'felipe.barros.pt@gmail.com',
                password: 'foobar',
                address:  {
                    number: 1,
                    country: 'BR',
                    state: 'PI',
                    city: 'Teresina'
                }
            };
        });

        it('Should create user', function(done) {
            this.userEntity.src.create(this.createData, (err, status, result) => {
                (err === null).should.equal(true);
                status.should.equal(true);;
                return done(err);
            });
        });

    });
}

module.exports = UnitTest