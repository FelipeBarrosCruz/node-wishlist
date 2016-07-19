'use strict';

function Test(Repository) {

 var should = require('chai').should();

    describe('Testing auth component', function() {

        beforeEach(function() {
            this.userEntity = Repository.get('app.entity.users');
        });

        it('Should create an user', function(done) {
            let Mock = {
                name: 'Felipe Barros',
                email: 'felipe.barros.pt@gmail.com',
                password: 'foobar',
                address:  '01311300'
            };

            this.userEntity.src.create(Mock, (err, status, result) => {
                (err === null).should.equal(true);
                status.should.equal(true);
                this.user = result;
                return done(err);
            });
        });

        it('Should authorize an user', function(done) {
            let Mock = {
                email:      'felipe.barros.pt@gmail.com',
                password:   'foobar'
            };

            this.userEntity.src.authorize({
                where: Mock
            }, (err, status, result) => {
                (err === null).should.equal(true);
                status.should.equal(true);
                return done(err);
            });
        });

        it('Should delete an user', function (done) {
            let Mock = {
                id: this.user.id,
                email: this.user.email
            };

            this.userEntity.src.delete(Mock, (err, status) => {
                (err === null).should.equal(true);
                status.should.equal(true);;
                return done(err);
            });
        });

    });
}

module.exports = Test;