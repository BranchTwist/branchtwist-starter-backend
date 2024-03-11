import httpStatus from 'http-status';
import { matchedData } from 'express-validator';
import { catchSend } from '../error_handling/catch_send.js';
import User from '../schemas/user_schema.js';

export const getUser = async (req, res) => {
    try {
        let user = await User.findById(res.locals._id);
        if (user) {
            res.status(httpStatus.OK).json(user);
        } else {
            res.status(httpStatus.NOT_FOUND).json({ 'message': 'User not found' });
        }
    } catch (e) {
        catchSend(res, e);
    }
};

export const putUser = async (req, res) => {
    try {
        let data = matchedData(req);
        let user = await User.findByIdAndUpdate(res.locals._id, data, { new: true });
        if (user) {
            res.status(httpStatus.OK).json(user);
        } else {
            res.status(httpStatus.NOT_FOUND).json({ 'message': 'User not found' });
        }
    } catch (e) {
        catchSend(res, e);
    }
};

export const deleteUser = async (req, res) => {
    try {
        let user = await User.findByIdAndDelete(res.locals._id);
        if (user) {
            res.status(httpStatus.OK).json(user);
        } else {
            res.status(httpStatus.NOT_FOUND).json({ 'message': 'User not found' });
        }
    } catch (e) {
        catchSend(res, e);
    }
};
