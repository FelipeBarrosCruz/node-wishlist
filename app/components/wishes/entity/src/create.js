'use strict';

function ModelAction(Repository, Model) {

    return (data, cb) => {
        Model
        .get()
        .create(data)
        .exec((err, result) => {
            return cb(err, (err ? false : true), result);
        });
    };
}

module.exports = ModelAction;