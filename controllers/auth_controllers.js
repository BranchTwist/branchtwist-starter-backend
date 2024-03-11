import { genSaltSync, hashSync, compareSync } from 'bcrypt';
import { matchedData } from 'express-validator';
import httpStatus from 'http-status';
import jwt from 'jsonwebtoken';
import { catchSend } from '../error_handling/catch_send.js';
import User from '../schemas/user_schema.js';
import { generateOTPCode } from '../utils/generators.js';

export const registerUser = async (req, res) => {
    try {
        let data = matchedData(req);
        let otpCode = generateOTPCode(6);
        let salt = genSaltSync(parseInt(process.env.SALT_ROUNDS));
        let otpHash = hashSync(otpCode, salt);
        await User.create({
            name: data.name,
            email: data.email,
            otpHash: otpHash,
            otpCreatedAt: new Date(),
        });
        //TODO: send email with otp code
        console.log(otpCode);
        res.status(httpStatus.OK).json({ 'message': 'Check email and validate OTP code' });
    } catch (e) {
        catchSend(res, e);
    }
};

export const loginUser = async (req, res) => {
    try {
        let data = matchedData(req);
        let user = await User.findOne({
            email: data.email,
        });
        if (user) {
            let otpCode = generateOTPCode(6);
            let salt = genSaltSync(parseInt(process.env.SALT_ROUNDS));
            let otpHash = hashSync(otpCode, salt);
            user.otpHash = otpHash;
            user.otpCreatedAt = new Date();
            await user.save();
            //TODO: send email with otp code
            console.log(otpCode);
            res.status(httpStatus.OK).json({ 'message': 'Check email and validate OTP code' });
        } else {
            res.status(httpStatus.NOT_FOUND).json({ 'message': 'User not found' });
        }
    } catch (e) {
        catchSend(res, e);
    }
};

export const createUserToken = async (req, res) => {
    try {
        let data = matchedData(req);
        let user = await User.findOne({
            email: data.email,
        });
        console.log(user?.otpCreatedAt);
        console.log(Date.now() - (parseInt(process.env.OTP_CODE_EXPIRATION_SECONDS) * 1000));
        console.log(user?.otpCreatedAt < Date.now() - (parseInt(process.env.OTP_CODE_EXPIRATION_SECONDS) * 1000));
        if (user?.otpHash && user?.otpCreatedAt >= Date.now() - (parseInt(process.env.OTP_CODE_EXPIRATION_SECONDS) * 1000)) {
            let otpCode = data.otpCode;
            let correct = compareSync(otpCode, user.otpHash);
            if (correct) {
                user.otpHash = undefined;
                await user.save();
                let token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET);
                res.status(httpStatus.OK).json({
                    user,
                    token,
                });
            } else {
                res.status(httpStatus.UNAUTHORIZED).json({ 'message': 'Rotated OTP code' });
            }
        } else {
            res.status(httpStatus.UNAUTHORIZED).json({ 'message': 'Expired or invalid OTP code' });
        }
    } catch (e) {
        catchSend(res, e);
    }
};
