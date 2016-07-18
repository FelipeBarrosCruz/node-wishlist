'use strict';


function UnitTest(Repository) {
    var should = require('chai').should();

    describe('User update', function() {

        beforeEach(function() {
            this.userEntity = Repository.get('app.entity.users');
            this.updateData = {
                where: {
                        email: 'felipe.barros.pt@gmail.com',
                },
                update: {
                    name: 'Felipe Barros Cruz',
                    password: 'barfoo',
                    address: '01412100'
                }
            };
        });

        it('Should update user', function(done) {
            this.userEntity.src.update(this.updateData, (err, status, result) => {
                (err === null).should.equal(true);
                status.should.equal(true);;
                return done(err);
            });
        });

    });
}

module.exports = UnitTest