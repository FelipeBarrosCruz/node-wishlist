module.exports = (err, req, res, next) => {

    if (err.name === 'UnauthorizedError') {
        return res.status(401).json({
            status: false,
            message: 'MESSAGE_UNAUTHORIZED_ERROR'
        });
    }

    return next();
};