import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API = "http://localhost:5000/todos";


// FETCH TODOS
export const fetchTodos = createAsyncThunk(
    "todos/fetchTodos",
    async () => {
        const response = await axios.get(API);
        return response.data;
    }
);


// ADD TODO
export const addTodo = createAsyncThunk(
    "todos/addTodo",
    async (text) => {
        const response = await axios.post(API, { text });
        return response.data;
    }
);


const todoSlice = createSlice({
    name: "todos",

    initialState: {
        items: []
    },

    extraReducers: (builder) => {

        builder.addCase(fetchTodos.fulfilled, (state, action) => {
            state.items = action.payload;
        });

        builder.addCase(addTodo.fulfilled, (state, action) => {
            state.items.push(action.payload);
        });
    }
});

export default todoSlice.reducer;