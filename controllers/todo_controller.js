import httpStatus from 'http-status';
import { matchedData } from 'express-validator';
import { catchSend } from '../error_handling/catch_send.js';
import Todo from '../schemas/todo_schema.js';

export const getTodos = async (req, res) => {
    try {
        let data = matchedData(req);
        let todos = await Todo.find({ _userId: res.locals._id })
            .sort({ createdAt: -1 })
            .skip(((data.page ?? 1) - 1) * process.env.PAGE_SIZE)
            .limit(process.env.PAGE_SIZE)


        res.status(httpStatus.OK).json(todos);
    } catch (e) {
        catchSend(res, e);
    }
};

export const postTodo = async (req, res) => {
    try {
        let data = matchedData(req);
        let todo = await Todo.create({ _userId: res.locals._id, ...data });
        res.status(httpStatus.OK).json(todo);
    } catch (e) {
        catchSend(res, e);
    }
};

export const getTodo = async (req, res) => {
    try {
        let data = matchedData(req);
        let todo = await Todo.findById(data._todoId);
        if (todo) {
            res.status(httpStatus.OK).json(todo);
        } else {
            res.status(httpStatus.NOT_FOUND).json({ 'message': 'Todo not found' });
        }
    } catch (e) {
        catchSend(res, e);
    }
};

export const putTodo = async (req, res) => {
    try {
        let data = matchedData(req);
        let todo = await Todo.findOneAndUpdate({ _id: data._todoId, _userId: res.locals._id }, { ...data }, { new: true });
        if (todo) {
            res.status(httpStatus.OK).json(todo);
        } else {
            res.status(httpStatus.NOT_FOUND).json({ 'message': 'Todo not found' });
        }
    } catch (e) {
        catchSend(res, e);
    }
};

export const deleteTodo = async (req, res) => {
    try {
        let data = matchedData(req);
        let todo = await Todo.findOneAndDelete({ _id: data._todoId, _userId: res.locals._id });
        if (todo) {
            res.status(httpStatus.OK).json({ 'message': 'Todo deleted' });
        } else {
            res.status(httpStatus.NOT_FOUND).json({ 'message': 'Todo not found' });
        }
    } catch (e) {
        catchSend(res, e);
    }
};