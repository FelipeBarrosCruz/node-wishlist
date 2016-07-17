'use strict';
/**
 * @api {delete} /users DELETE
 * @apiDescription Delete an user
 * @apiName DELETE
 * @apiGroup Users
 *
 * @apiErrorExample {json} Error-Response:
 *     HTTP/1.1 400 Bad Request
 *     {
 *       "status": false,
 *       "message": "MESSAGE_USER_DELETE_ERROR"
 *     }
 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 202 OK
 *     {
 *          "status": true,
 *          "message": "MESSAGE_USER_DELETE_SUCCESS"
 *     }
 */


let Route = (Repository) => {

    return (req, res, next) => {
        let UserEntity = Repository.get('app.entity.users');

        let Data = {
            id: req.user.id
        };

        return UserEntity.src.delete(Data, (err, status) => {
            if (err || !status) {
                return res.status(500).json({
                    status: status,
                    message: 'MESSAGE_USER_DELETE_ERROR'
                });
            }

            return res.status(200).json({
                status: status,
                message: 'MESSAGE_USER_DELETE_SUCCESS'
            });
        });
    };
};

module.exports = Route;