'use strict';

function ModelAction(Application, Model) {

    function filtereUpdateFields(body) {
        const AllowFields = [
            'name',
            'password'
        ];

        let response = {};

        AllowFields.forEach((field) => {
            if (body[field]) {
                 response[field] = body[field];
            }
        });

        return response;
    }

    return (data, cb) => {
        Model
        .get()
        .update(data.where, filtereUpdateFields(data.update))
        .exec((err, result) => {
            return cb(err, (err || !result.length ? false : true ), result);
        });
    };
}

module.exports = ModelAction;