'use strict';

function ModelAction(Repository, Model) {

    function filtereUpdateFields(body) {
        const AllowFields = [
            'name',
            'description',
            'amount'
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

        let Where  = data.where,
            Update = filtereUpdateFields(data.update);

        return Model
            .get()
            .update(Where, Update)
            .exec((err, result) => {
                return cb(err, (err || !result.length ? false : true ), result);
            });
    };
}

module.exports = ModelAction;