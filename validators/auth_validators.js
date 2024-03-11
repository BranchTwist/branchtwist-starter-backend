import { body } from "express-validator";
import { validationBuilder } from "../middleware/validation_middleware.js";

export const validateRegisterUser = validationBuilder([
    body('name').trim().notEmpty().isAlphanumeric().withMessage('It is required an alphanumeric value for name'),
    body('email').trim().isEmail().withMessage('Invalid email address'),
]);

export const validateLoginUser = validationBuilder([
    body('email').trim().isEmail().withMessage('Invalid email address'),
]);

export const validateGetTokenFromOtpCode = validationBuilder([
    body('email').trim().isEmail().withMessage('Invalid email address'),
    body('otpCode').trim().isNumeric().isLength({ min: 6, max: 6 }).withMessage('Invalid OTP code'),
]);