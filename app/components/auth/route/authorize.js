'use strict';

let Route = (Repository) => {

    return (req, res, next) => {
        let UserEntity = Repository.get('app.entity.users');

        let Data = {
            where: {
                email:      req.body.email,
                password:   req.body.password
            }
        };

        UserEntity.src.authorize(Data, (err, status, result) => {
            if (err || !status || !result.length) {
                return res.status(401).json({
                    status: false,
                    message: 'MESSAGE_USERX_UNAUTHORIZED'
                });
            }

            return res.status(200).json({
                status: status,
                data:   result[0],
                token:  'oie'
            });
        });
    };
};

module.exports = Route;