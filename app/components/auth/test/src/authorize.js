'use strict';


function UnitTest(Repository) {
    var should = require('chai').should();

    describe('User Authorization', function() {

        beforeEach(function() {
            this.userEntity = Repository.get('app.entity.users');

            this.authorizeData = {
                email:      'felipe.barros.pt@gmail.com',
                password:   'foobar'
            };
            this.deleteData = this.authorizeData;
            this.createData = {
                name: 'Felipe Barros',
                email: 'felipe.barros.pt@gmail.com',
                password: 'foobar'
            };
        });

        it('Should create user', function(done) {
            this.userEntity.src.create(this.createData, (err, status, result) => {
                (err === null).should.equal(true);
                status.should.equal(true);;
                return done(err);
            });
        });

        it('Should authorize user', function(done) {
            this.userEntity.src.authorize({
                where: this.authorizeData
            }, (err, status, result) => {
                (err === null).should.equal(true);
                status.should.equal(true);
                return done(err);
            });
        });

        it('Should delete user', function (done) {
           this.userEntity.src.delete(this.deleteData, (err, status) => {
                (err === null).should.equal(true);
                status.should.equal(true);;
                return done(err);
            });
        });

    });
}

module.exports = UnitTest