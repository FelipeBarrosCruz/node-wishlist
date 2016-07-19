'use strict';

let Route = (Repository) => {

    return (req, res, next) => {
        let UserEntity  = Repository.get('app.entity.users'),
            JwtSignIn   = Repository.get('security.jwtSignIn');

        let Data = {
            where: {
                email:      req.body.email,
                password:   req.body.password
            }
        };

        UserEntity.src.authorize(Data, (err, status, result) => {
            if (err || !status || !result.length) {
                return res.status(401).json({
                    status: false,
                    message: 'MESSAGE_USER_UNAUTHORIZED'
                });
            }

            let user = result.length && result[0];

            return res.status(200).json({
                status: status,
                data:   user,
                token:  JwtSignIn({
                    id: user.id
                })
            });
        });
    };
};

module.exports = Route;