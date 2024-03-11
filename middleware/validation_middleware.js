import { validationResult } from 'express-validator';
import httpStatus from 'http-status';

export const validationBuilder = (validators) => {
    return [
        ...validators,
        validationMiddleware,
    ]
}

export const validationMiddleware = (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(httpStatus.BAD_REQUEST).json({
            type: 'validation',
            message: 'Validation failed',
            errors: errors.array(),
        });
    }

    next();
};
