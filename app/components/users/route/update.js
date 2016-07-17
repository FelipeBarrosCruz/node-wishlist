'use strict';

let Route = (Repository) => {

    return (req, res, next) => {
        let UserEntity = Repository.get('app.entity.users');

        let Data = {
            where: {
                id: req.user.id
            },
            update: req.body
        };

        return UserEntity.src.update(Data, (err, status, result) => {
            if (err || !status || result && !result.length) {
                return res.status(400).json({
                    status: status,
                    message: 'MESSAGE_USER_UPDATE_ERROR'
                });
            }

            return res.json({
                status: status,
                data: result[0],
                message: 'MESSAGE_USER_UPDATE_SUCCESS'
            });
        });
    };
};

module.exports = Route;