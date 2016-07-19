'use strict';
/**
 * @api {get} /locations/:cep SELECT
 * @apiDescription Search a location by cep
 * @apiName SELECT
 * @apiGroup Locations
 *
 * @apiParam {Integer} cep Cep for search.
 *
 * @apiErrorExample {json} Error-Response:
 *     HTTP/1.1 400 Bad Request
 *     {
 *       "status": false,
 *       "message": "MESSAGE_LOCATION_NOT_FOUND"
 *     }
 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *          "status": true,
 *          "data": {
 *              "status": true,
 *              "data": {
 *                  "cep": "01311300",
 *                  "tipoDeLogradouro": "Avenida",
 *                  "logradouro": "Paulista",
 *                  "bairro": "Bela Vista",
 *                  "cidade": "São Paulo",
 *                  "estado": "SP"
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