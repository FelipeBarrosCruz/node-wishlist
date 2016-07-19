'use strict';

function Test(Repository) {
    var should = require('chai').should();

    describe('Testing wishes component', function() {

        beforeEach(function() {
            this.userEntity = Repository.get('app.entity.users');
            this.wishEntity = Repository.get('app.entity.wishes');
        });

        it('Should create an user', function(done) {
            let Mock = {
                name:       'Felipe Barros',
                email:      'felipe.barros.pt@gmail.com',
                password:   'foobar',
                address:    '01311300'
            };

            this.userEntity.src.create(Mock, (err, status, result) => {
                this.user = result;
                (err === null).should.equal(true);
                status.should.equal(true);;
                return done(err);
            });
        });

        it('Should create a wish', function (done) {
            let Mock = {
                name:        'Macbook',
                description: 'Desejo ter um macbook',
                amount:      9999.99,
                userId:      this.user.id
            };

            this.wishEntity.src.create(Mock, (err, status, result) => {
                this.wish = result;
                (err === null).should.equal(true);
                status.should.equal(true);;
                return done(err);
            });
        });

        it('Should update a wish', function (done) {
            let Mock = {
                where: {
                    id: this.wish.id,
                    userId: this.wish.userId
                },
                update: {
                    name: 'Notebook Positivo',
                    description: 'Agora quero um notebook da positivo',
                    amount: 1000.99
                }
            };

            this.wishEntity.src.update(Mock, (err, status, result) => {
                (err === null).should.equal(true);
                status.should.equal(true);;
                return done(err);
            });
        });

        it('Should select a wish', function (done) {
            let Mock = {
                where: {
                    id: this.wish.id,
                    userId: this.wish.userId
                }
            };

            this.wishEntity.src.select(Mock, (err, status, result) => {
                (err === null).should.equal(true);
                status.should.equal(true);;
                return done(err);
            });
        });

        it('Should delete a wish', function (done) {
            let Mock = {
                id: this.wishId,
                userId: this.wish.userId
            };

            this.wishEntity.src.delete(Mock, (err, status) => {
                (err === null).should.equal(true);
                status.should.equal(true);;
                return done(err);
            });
        });


        it('Should delete an user', function (done) {
            let Mock = {
                id: this.user.id
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