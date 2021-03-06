'use strict';

function ModelAction(Repository, Model) {

    function searchByCep(data, cb) {
        Repository.get('app.helper.locations').searchByCEP({
            cep: data.address
        }, (err, status, body) => {
            return cb(err, status, body);
        });
    }

    function encryptPassword(password) {
        return require('sha1')(password);
    }

    return (data, cb) => {

        let SearchByCepPromise = new Promise((resolve, reject) => {
            return searchByCep(data, (err, status, result) => {
                if (err || !status) {
                    return reject(err);
                }
                return resolve(result);
            });
        });

        SearchByCepPromise.then((result) => {
            data.address  = result;
            data.password = encryptPassword(data.password);

            Model
            .get()
            .create(data)
            .exec((err, result) => {
                return cb(err, (err ? false : true), result);
            });

        }).catch((err) => {
            return cb(err, false, null);
        });

    };
}

module.exports = ModelAction;