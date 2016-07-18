'use strict';
/**
 * @api {get} /users SELECT
 * @apiDescription Select an user
 * @apiName SELECT
 * @apiGroup Users
 *
 * @apiErrorExample {json} Error-Response:
 *     HTTP/1.1 400 Bad Request
 *     {
 *       "status": false,
 *       "message": "MESSAGE_USER_NOT_FOUND"
 *     }
 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *          "status": true,
 *          "data": {
 *              "id": 1,
 *              "name":  "Felipe Barros",
 *              "email": "felipe.barros.pt@gmail.com",
 *              "address": {
 *                  "number": 1,
 *                  "country": "BR",
 *                  "state": "PI",
 *                  "city": "Teresina"
 *              }
 *          }
 *     }
 */

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

            let User = result.length && result[0];
            delete User.password;

            return res.status(200).json({
                status: status,
                data:   User
            });
        });
    };
};

module.exports = Route;