'use strict';

function Test(Repository) {

    var should = require('chai').should();

    describe('Testing users component', function() {

        beforeEach(function() {
            this.userEntity = Repository.get('app.entity.users');

            this.createData = {
                name: 'Felipe Barros',
                email: 'felipe.barros.pt@gmail.com',
                password: 'foobar',
                address:  '01311300'
            };

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

            this.selectData = {
                email: 'felipe.barros.pt@gmail.com'
            };

            this.deleteData = this.selectData;

        });

        it('Should create an user', function(done) {
            this.userEntity.src.create(this.createData, (err, status, result) => {
                (err === null).should.equal(true);
                status.should.equal(true);
                return done(err);
            });
        });

        it('Should update an user', function(done) {
            this.userEntity.src.update(this.updateData, (err, status, result) => {
                (err === null).should.equal(true);
                status.should.equal(true);;
                return done(err);
            });
        });

        it('Should select an user', function(done) {
            this.userEntity.src.select(this.selectData, (err, status, result) => {
                (err === null).should.equal(true);
                status.should.equal(true);;
                return done(err);
            });
        });

        it('Should delete an user', function (done) {
           this.userEntity.src.delete(this.deleteData, (err, status) => {
                (err === null).should.equal(true);
                status.should.equal(true);;
                return done(err);
            });
        });
    });
}

module.exports = Test;