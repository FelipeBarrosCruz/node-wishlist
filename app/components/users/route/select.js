'use strict';

let Route = (Repository) => {

    return (req, res, next) => {
        let UserEntity = Repository.get('app.entity.users');

        let Data = {
            where: {
                id: req.user.id
            }
        };

        return UserEntity.src.select(Data, (err, status, result) => {
            if (err || !status || result && !result.length) {
                return res.status(400).json({
                    status: status,
                    message: 'MESSAGE_USER_NOT_FOUND'
                });
            }

            return res.json({
                status: status,
                data: result[0]
            });
        });
    };
};

module.exports = Route;