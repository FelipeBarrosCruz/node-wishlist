'use strict';

function ModelAction(Application, Model) {

    return (data, cb) => {
        Model
        .get()
        .destroy(data)
        .exec((err, result) => {
            return cb(err, (err || !result.length) ? false : true, result);
        });
    };
}

module.exports = ModelAction;