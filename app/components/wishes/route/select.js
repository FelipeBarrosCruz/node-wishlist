'use strict';


let Route = (Repository) => {

    return (req, res, next) => {
        let WishEntity = Repository.get('app.entity.wishes');
        let Data = {
            where: {
                id:     req.params.id,
                userId: req.user.id
            }
        };

        return WishEntity.src.select(Data, (err, status, result) => {
            if (err || !status || result && !result.length) {
                return res.status(400).json({
                    status: status,
                    message: 'MESSAGE_WISH_NOT_FOUND'
                });
            }

            return res.status(200).json({
                status: status,
                data:   result[0]
            });
        });
    };
};

module.exports = Route;