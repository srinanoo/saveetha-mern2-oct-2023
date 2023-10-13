const auth = (req, res, next) => {
    if(!req.body.token) {
        res.status(401).json({"message": "Not Authorized"});
    } else next();
};

module.exports = auth;