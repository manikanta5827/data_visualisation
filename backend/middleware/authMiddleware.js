const jwt = require('jsonwebtoken');

 authMiddleware = async (req, res, next) => {
    const token = req.headers.authorization?.split(' ')[1];

    if (!token) {
        return res.status(403).json({ message: 'No token provided' });
    }
    // console.log('Token : ',token);
    try {
        jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
            if (err) {
                console.log(err.message);
                return res.status(401).json({ message: 'Unauthorized',err });
            }
            next();
        });
    } catch (error) {
        console.log(error);
        res.status(502).json({ message: 'Error verifying token' });
    }
};

module.exports = authMiddleware;
