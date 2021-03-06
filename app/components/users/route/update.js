'use strict';
/**
 * @api {update} /users UPDATE
 * @apiDescription Update an user
 * @apiName UPDATE
 * @apiGroup Users
 *
 * @apiParamExample {json} Request-Example:
 *     Body
 *     {
 *       "name":     "Felipe Barros",
 *       "password": "foobar",
 *       "address":  01311300
 *       }
 *     }
 *
 * @apiErrorExample {json} Error-Response:
 *     HTTP/1.1 400 Bad Request
 *     {
 *       "status": false,
 *       "message": "MESSAGE_USER_UPDATE_ERROR"
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
 *                  "cep": "01311300",
 *                  "tipoDeLogradouro": "Avenida",
 *                  "logradouro": "Paulista",
 *                  "bairro": "Bela Vista",
 *                  "cidade": "São Paulo",
 *                  "estado": "SP"
 *              }
 *          },
 *          "message": "MESSAGE_USER_UPDATE_SUCCESS"
 *     }
 */

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