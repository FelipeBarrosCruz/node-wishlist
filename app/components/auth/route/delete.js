'use strict';

let Route = (Repository) => {

    return (req, res, next) => {
        JwtSignout = Repository.get('security.jwtSignOut');

        JwtSignout.revoke(req.user);

        return res.status(200).json({
            status: true
        });
    };
};

module.exports = Route;