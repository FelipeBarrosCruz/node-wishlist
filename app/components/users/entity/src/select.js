'use strict';

function ModelAction(Application, Model) {

    return (data, cb) => {
        Model
        .get()
        .find(data)
        .exec((err, result) => {
            return cb(err, (err || !result.length ? false : true ), result);
        });
    };
}

module.exports = ModelAction;