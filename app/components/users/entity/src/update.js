'use strict';

function ModelAction(Repository, Model) {

    function filtereUpdateFields(body) {
        const AllowFields = [
            'name',
            'password',
            'address'
        ];

        let response = {};

        AllowFields.forEach((field) => {
            if (body[field]) {
                 response[field] = body[field];
            }
        });

        return response;
    }

    function searchByCep(data, cb) {
        Repository.get('app.helper.locations').searchByCEP({
            cep: data.address
        }, (err, status, body) => {
            return cb(err, status, body);
        });
    }

    function saveUser(where, update, cb) {
        return Model
                .get()
                .update(where, update)
                .exec((err, result) => {
                    return cb(err, (err || !result.length ? false : true ), result);
                });
    }

    return (data, cb) => {

        let Where  = data.where,
            Update = filtereUpdateFields(data.update);

        if (!Update.address) {
            return saveUser(Where, Update, cb);
        }

        let SearchByCepPromise = new Promise((resolve, reject) => {
            return searchByCep(Update, (err, status, result) => {
                if (err || !status) {
                    return reject(err);
                }
                return resolve(result);
            });
        });

        return SearchByCepPromise.then((result) => {
            Update.address = result;
            saveUser(Where, Update, cb);
        });
    };
}

module.exports = ModelAction;