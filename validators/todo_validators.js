import { param, query, body } from 'express-validator';
import { validationBuilder } from '../middleware/validation_middleware.js';

export const validateGetTodos = validationBuilder([
    query('page').trim().isNumeric().optional().withMessage('It is required an numeric value for page'),
]);

export const validatePostTodo = validationBuilder([
    body('done').trim().notEmpty().isBoolean().withMessage('It is required a boolean value for done'),
    body('description').trim().notEmpty().isString().withMessage('It is required an alphanumeric value for description'),
]);

export const validateGetTodo = validationBuilder([
    param('_todoId').trim().notEmpty().isUUID().withMessage('It is required a UUID value for _todoId'),
]);

export const validatePutTodo = validationBuilder([
    param('_todoId').trim().notEmpty().isUUID().withMessage('It is required a UUID value for _todoId'),
    body('done').trim().notEmpty().isBoolean().withMessage('It is required a boolean value for done'),
    body('description').trim().notEmpty().isString().withMessage('It is required an alphanumeric value for description'),
]);

export const validateDeleteTodo = validationBuilder([
    param('_todoId').trim().notEmpty().isUUID().withMessage('It is required a UUID value for _todoId'),
]);