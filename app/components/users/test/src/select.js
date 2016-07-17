'use strict';


function UnitTest(Repository) {
    var should = require('chai').should();

    describe('User select', function() {

        beforeEach(function() {
            this.userEntity = Repository.get('app.entity.users');
            this.selectData = {
                email: 'felipe.barros.pt@gmail.com'
            };
        });

        it('Should select user', function(done) {
            this.userEntity.src.select(this.selectData, (err, status, result) => {
                (err === null).should.equal(true);
                status.should.equal(true);;
                return done(err);
            });
        });
    });
}

module.exports = UnitTest