import React, { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";

import { addTodo, fetchTodos } from "../features/todoSlice";

function Todo() {

    const [text, setText] = useState("");

    const dispatch = useDispatch();

    const todos = useSelector((state) => state.todos.items);


    useEffect(() => {
        dispatch(fetchTodos());
    }, []);


    const handleAdd = () => {

        if (text.trim() === "") return;

        dispatch(addTodo(text));

        setText("");
    };


    return (
        <div style={{ padding: "20px" }}>

            <h1>Todo App</h1>

            <input
                type="text"
                placeholder="Enter todo"
                value={text}
                onChange={(e) => setText(e.target.value)}
            />

            <button onClick={handleAdd}>
                Add
            </button>

            <ul>
                {todos.map((todo) => (
                    <li key={todo._id}>
                        {todo.text}
                    </li>
                ))}
            </ul>

        </div>
    );
}

export default Todo;