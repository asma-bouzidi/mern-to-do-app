import express from 'express';
import Todo from '../models/todo.model.js';

const router = express.Router();

//get todo by id
router.get('/:id', async (req, res) => {
    try {
        const todo = await Todo.findById(req.params.id);
        if (!todo) {
            res.json({ message: 'Todo does not exist' });
        }
        res.status(200).json(todo);        
    } catch (error) {
        res.status(500).json({ message: error.message });   
    }
} )

//get all todos
router.get('/', async (req, res) => {
    try {
        const todos = await Todo.find();
        res.json(todos);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
})

//create a todo
router.post('/', async (req, res) => {
    const todo = new Todo({
        text: req.body.text
    })

    try {
        const newTodo = await todo.save();
        res.status(201).json(newTodo);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
})

//update a todo by (text  and /completed)
router.patch('/:id', async (req, res) => {
    try {
        const todo = await Todo.findById(req.params.id);
        if (!todo) {
            return res.status(404).json({ message: 'Todo not found' });
        }

        if (req.body.text !== undefined) {
            todo.text = req.body.text;
        }
        if (req.body.completed !== undefined) {
            todo.completed = req.body.completed;
        }

        const updatedTodo = await todo.save();
        res.json(updatedTodo);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
})

//delete a todo
router.delete('/:id', async (req, res) => {
    try {
        await Todo.findByIdAndDelete(req.params.id);
        res.json({ message: 'Todo deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

export default router;
