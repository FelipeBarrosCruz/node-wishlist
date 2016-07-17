'use strict';

let Route = (Repository) => {

    return (req, res, next) => {
        let UserEntity = Repository.get('app.entity.users');

        let Data = {
            name:       req.body.name,
            email:      req.body.email,
            password:   req.body.password
        };

        UserEntity.src.create(Data, (err, status, result) => {
            if (err || !status) {
                console.log(err);
                return res.status(400).json({
                    status: status,
                    message: 'MESSAGE_USER_CREATE_ERROR'
                });
            }

            return res.status(201).json({
                status: status,
                data:   result,
                token:  'oie',
                message: 'MESSAGE_USER_CREATE_SUCCESS'
            });
        });
    };
};

module.exports = Route;