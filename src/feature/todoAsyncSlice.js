import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
const initialState = {
    todo: {},
    todos: [],
    status: "",
    error: ""
}

export const fetchTodos = createAsyncThunk('todos/fetchTodos', async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(json => console.log(json))
    return response.todos
  })

const todoAsyncSlice = createSlice({
    name: "todoAsync",
    initialState,
    reducer: {},
    extraReducers: builder => {
        builder
          .addCase(fetchTodos.pending, (state, action) => {
            state.status = 'loading'
          })
          .addCase(fetchTodos.fulfilled, (state, action) => {
            
            
            
            state.status = 'idle'

            state.todos.push(action.payload)
          })

          .addCase(fetchTodos.rejected, (state, action) => {
            
            
            
            state.status = 'Failed'

            state.error=state.error.message
            })
      }
})

export default todoAsyncSlice.reducer