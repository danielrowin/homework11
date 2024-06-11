const { Todo } = require('../models');

const getAllTodos = async (req, res) => {
    const todos = await Todo.findAll();
    res.json(todos);
};

const getTodoById = async (req, res) => {
    const todo = await Todo.findByPk(req.params.id);
    if (todo) {
        res.json(todo);
    } else {
        res.status(404).json({ error: 'Todo not found' });
    }
};

const createTodo = async (req, res) => {
    const newTodo = await Todo.create(req.body);
    res.status(201).json(newTodo);
};

const deleteTodo = async (req, res) => {
    const todo = await Todo.findByPk(req.params.id);
    if (todo) {
        await todo.destroy();
        res.status(204).send();
    } else {
        res.status(404).json({ error: 'Todo not found' });
    }
};

module.exports = {
    getAllTodos,
    getTodoById,
    createTodo,
    deleteTodo,
};
