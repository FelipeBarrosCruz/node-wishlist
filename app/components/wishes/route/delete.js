'use strict';


let Route = (Repository) => {

    return (req, res, next) => {
        let WishEntity = Repository.get('app.entity.wishes');
        let Data = {
            id:     req.params.id,
            userId: req.user.id
        };

        return WishEntity.src.delete(Data, (err, status) => {
            if (err || !status) {
                return res.status(500).json({
                    status: status,
                    message: 'MESSAGE_WISH_DELETE_ERROR'
                });
            }

            return res.status(200).json({
                status: status,
                message: 'MESSAGE_WISH_DELETE_SUCCESS'
            });
        });
    };
};

module.exports = Route;