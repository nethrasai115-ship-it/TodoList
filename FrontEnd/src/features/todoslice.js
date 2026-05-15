import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API = "https://todolist-nwr8.onrender.com";


// FETCH TODOS
export const fetchTodos = createAsyncThunk(
    "todos",
    async () => {
        const response = await axios.get(API);
        return response.data;
    }
);


// ADD TODO
export const addTodo = createAsyncThunk(
    "todos",
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