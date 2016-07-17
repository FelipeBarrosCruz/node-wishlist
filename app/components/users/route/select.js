'use strict';

let Route = (Repository) => {

    return (req, res, next) => {
        return res.json({
            status: true,
            data: req.user || {}
        });
    };
};

module.exports = Route;