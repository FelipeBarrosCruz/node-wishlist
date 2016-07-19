'use strict';

let Route = (Repository) => {

    return (req, res, next) => {
        let WishEntity = Repository.get('app.entity.wishes');
        let Data = {
            name:        req.body.name,
            description: req.body.description,
            amount:      req.body.amount,
            userId:      req.body.userId
        };

        WishEntity.src.create(Data, (err, status, result) => {
            if (err || !status) {
                return res.status(400).json({
                    status: status,
                    message: 'MESSAGE_WISH_CREATE_ERROR'
                });
            }

            return res.status(201).json({
                status: status,
                data:   result,
                message: 'MESSAGE_WISH_CREATE_SUCCESS'
            });
        });
    };
};

module.exports = Route;