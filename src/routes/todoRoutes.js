const express = require('express');
const { getAllTodos, getTodoById, createTodo, deleteTodo } = require('../controllers/todoController');

const router = express.Router();

router.get('/', getAllTodos);
router.get('/:id', getTodoById);
router.post('/', createTodo);
router.delete('/:id', deleteTodo);

module.exports = router;
