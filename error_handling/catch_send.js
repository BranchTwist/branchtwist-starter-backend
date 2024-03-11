import httpStatus from 'http-status';
import mongoose from 'mongoose';
import ApiError from './api_error.js';

export const catchSend = function (res, e) {
    if (e instanceof ApiError) {
        res.status(e.statusCode).json({
            message: e.message,
        });
    } else if (e instanceof mongoose.Error.ValidationError) {
        res.status(httpStatus.BAD_REQUEST).json({
            message: e.message,
        });
    } else if (e.code === 11000) {
        res.status(httpStatus.NOT_ACCEPTABLE).json({
            message: 'Duplicate key',
        });
    } else {
        console.log(e);
        res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
            message: e.toString()
        });
    }
};
