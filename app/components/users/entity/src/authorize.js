'use strict';

function ModelAction(Repository, Model) {

    function ValidateWhere(data) {
        if (!data || data && !data.email || !data.password) {
            return false
        }

        if (!/[A-Za-z._\-0-9]+@[A-Za-z._\-0-9]+\.[A-Za-z]{2,4}/.test(data.email)) {
            return false;
        }

        if (data.password && (data.password.length <= 3 || data.password.length >= 12)) {
            return false;
        }

        return true;
    }

    function encryptPassword(password) {
        return require('sha1')(password);
    }


    return (data, cb) => {

        if (!ValidateWhere(data && data.where)) {
            return cb(new Error('Invalid params'), false, null);
        }

        data.where.password = encryptPassword(data.where.password);

        Model
        .get()
        .find(data)
        .exec((err, result) => {;
            return cb(err, (err || !result.length) ? false : true, result);
        });
    };
}

module.exports = ModelAction;