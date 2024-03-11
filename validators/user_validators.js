import { body } from "express-validator";
import { validationBuilder } from "../middleware/validation_middleware.js";

export const validatePutUser = validationBuilder([
    body('name').trim().notEmpty().isAlphanumeric().withMessage('It is required an alphanumeric value for name'),
    body('email').trim().isEmail().withMessage('Invalid email address'),
]);
