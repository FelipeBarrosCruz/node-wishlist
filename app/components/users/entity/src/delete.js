'use strict';

function ModelAction(Repository, Model) {

    return (data, cb) => {
        Model
        .get()
        .destroy(data)
        .exec((err) => {
            return cb(err, (err) ? false : true);
        });
    };
}

module.exports = ModelAction;