'use strict';

function ModelAction(Application, Model) {


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