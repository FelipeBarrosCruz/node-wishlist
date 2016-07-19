'use strict';


let Route = (Repository) => {

    return (req, res, next) => {
        let WishEntity = Repository.get('app.entity.wishes');
        let Data = {
            where: {
                id: req.param.id,
                userId: req.user.id
            },
            update: req.body
        };

        return WishEntity.src.update(Data, (err, status, result) => {
            if (err || !status || result && !result.length) {
                return res.status(400).json({
                    status: status,
                    message: 'MESSAGE_WISH_UPDATE_ERROR'
                });
            }

            return res.json({
                status: status,
                data: result[0],
                message: 'MESSAGE_WISH_UPDATE_SUCCESS'
            });
        });
    };
};

module.exports = Route;