import jwt from 'jsonwebtoken';

export const validateToken = function (req, res, next) {
    const bearerHeader = req.headers['authorization'];
    if (bearerHeader != undefined) {
        const bearer = bearerHeader.split(' ');
        const bearerToken = bearer[1];
        jwt.verify(bearerToken, process.env.JWT_SECRET, async function (error, decoded) {
            if (error) {
                res.status(401).json({ 'message': 'Invalid token' });
            } else {
                if (decoded._id) {
                    res.locals._id = decoded._id;
                    next();
                } else {
                    res.status(401).json({ 'message': 'User not found' });
                }
            }
        });
    } else {
        res.status(401).json({ 'message': 'Token not found' });
    }
};