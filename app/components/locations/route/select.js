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

        let LocationHelper = Repository.get('app.helper.locations');

        LocationHelper.searchByCEP({
            cep: req.params.cep
        }, (err, status, result) => {
            if (err || !status) {
                return res.status(400).json({
                    status: status,
                    message: 'MESSAGE_LOCATION_NOT_FOUND'
                });

            }

            return res.status(200).json({
                status: status,
                data:   result
            });
        });
    };
};

module.exports = Route;