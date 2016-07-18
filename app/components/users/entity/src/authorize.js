'use strict';

function ModelAction(Repository, Model) {

    function ValidateWhere(data) {
        if (!/[A-Za-z._\-0-9]+@[A-Za-z._\-0-9]+\.[A-Za-z]{2,4}/.test(data.email)) {
            return false;
        }

        if (data.password && (data.password.length <= 3 || data.password.length >= 12)) {
            return false;
        }

        return true;
    }

    return (data, cb) => {

        if (!ValidateWhere(data && data.where)) {
            return cb(new Error('Invalid params'), false, null);
        }

        Model
        .get()
        .find(data)
        .exec((err, result) => {;
            return cb(err, (err || !result.length) ? false : true, result);
        });
    };
}

module.exports = ModelAction;