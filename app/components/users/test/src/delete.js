'use strict';


function UnitTest(Repository) {
    var should = require('chai').should();

    describe('User delete', function() {

        beforeEach(function() {
            this.userEntity = Repository.get('app.entity.users');
            this.deleteData = {
                email:      'felipe.barros.pt@gmail.com',
                password:   'foobar'
            };
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