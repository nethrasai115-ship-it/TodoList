const express = require("express");
const router = express.Router();

const Todo = require("../models/Todo");


// ADD TODO
router.post("/", async (req, res) => {
    try {
        const newTodo = new Todo({
            text: req.body.text
        });

        const savedTodo = await newTodo.save();

        res.json(savedTodo);

    } catch (error) {
        res.status(500).json(error);
    }
});


// GET TODOS

router.get("/", async (req, res) => {
    try {
        const todos = await Todo.find();

        res.json(todos);

    } catch (error) {
        res.status(500).json(error);
    }
});

module.exports = router;