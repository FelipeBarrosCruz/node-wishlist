module.exports = (req, res, next) => {
    return res.status(404).json({
        status: false,
        message: 'MESSAGE_PAGE_NOT_FOUND'
    });
};