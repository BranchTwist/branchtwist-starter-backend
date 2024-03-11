import { Router } from 'express';
import { deleteUser, getUser, putUser } from '../controllers/user_controllers.js';
import { createUserToken, loginUser, registerUser } from '../controllers/auth_controllers.js';
import { validateToken } from '../middleware/auth_middleware.js';
import { validateGetTokenFromOtpCode, validateLoginUser, validateRegisterUser } from '../validators/auth_validators.js';
import { validatePutUser } from '../validators/user_validators.js';
import { validateGetTodos, validateGetTodo, validatePostTodo, validatePutTodo, validateDeleteTodo } from '../validators/todo_validators.js';
import { getTodos, postTodo, getTodo, putTodo, deleteTodo } from '../controllers/todo_controller.js';
const router = Router();

router.route('/register').post(validateRegisterUser, registerUser);
router.route('/login').post(validateLoginUser, loginUser);
router.route('/gettoken').post(validateGetTokenFromOtpCode, createUserToken);
router.route('/user')
    .get(validateToken, getUser)
    .put(validateToken, validatePutUser, putUser)
    .delete(validateToken, deleteUser);

router.route('/todos')
    .get(validateToken, validateGetTodos, getTodos)
    .post(validateToken, validatePostTodo, postTodo);

router.route('/todos/:_todoId')
    .get(validateToken, validateGetTodo, getTodo)
    .put(validateToken, validatePutTodo, putTodo)
    .delete(validateToken, validateDeleteTodo, deleteTodo);

export default router;
