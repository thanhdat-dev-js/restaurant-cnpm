const jwt = require("jsonwebtoken");
const verifyToken = (req, res, next) => {
    
    const token =
        req.body.token || req.query.token || req.headers["x-access-token"];

    if (!token) {
        return res.status(400).json("A token is required for authentication");
    }
    try {
        const decoded = jwt.verify(token, process.env.SECRET);
        req.user = decoded;
    } catch (err) {
        return res.status(403).json("Invalid Token");
    }

    return (req.user.permission !== 'admin') 
        ? res.status(403).json({ success: 0, msg: 'Unauthorized' })
        : next();
};

module.exports = verifyToken;