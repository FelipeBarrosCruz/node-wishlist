'use strict';
/**
 * @api {post} /users CREATE
 * @apiDescription Create an user
 * @apiName CREATE
 * @apiGroup Users
 *
 * @apiParamExample {json} Request-Example:
 *     Body
 *     {
 *       "name":     "Felipe Barros"
 *       "email":    "felipe.barros.pt@gmail.com",
 *       "password": "foobar",
 *       "address":  01311300
 *     }
 *
 * @apiErrorExample {json} Error-Response:
 *     HTTP/1.1 400 Bad Request
 *     {
 *       "status": false,
 *       "message": "MESSAGE_USER_CREATE_ERROR"
 *     }
 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 201 Created
 *     {
 *          "status": true,
 *          "data": {
 *              "id": 1,
 *              "name":  "Felipe Barros",
 *              "email": "felipe.barros.pt@gmail.com"
 *              "address": {
 *                  "cep": "01311300",
 *                  "tipoDeLogradouro": "Avenida",
 *                  "logradouro": "Paulista",
 *                  "bairro": "Bela Vista",
 *                  "cidade": "São Paulo",
 *                  "estado": "SP"
 *              }
 *          },
 *          "token": "JsonWebToken",
 *          "message": "MESSAGE_USER_CREATE_SUCCESS"
 *     }
 */

let Route = (Repository) => {


    return (req, res, next) => {
        let UserEntity = Repository.get('app.entity.users'),
            JwtSign     = Repository.get('security.jwtSign');

        let Data = {
            name:       req.body.name,
            email:      req.body.email,
            password:   req.body.password
        };

        UserEntity.src.create(Data, (err, status, result) => {
            if (err || !status) {
                console.log(err);
                return res.status(400).json({
                    status: status,
                    message: 'MESSAGE_USER_CREATE_ERROR'
                });
            }

            delete result.password;

            return res.status(201).json({
                status: status,
                data:   result,
                token:  JwtSign({
                    id: user.id
                }),
                message: 'MESSAGE_USER_CREATE_SUCCESS'
            });
        });
    };
};

module.exports = Route;