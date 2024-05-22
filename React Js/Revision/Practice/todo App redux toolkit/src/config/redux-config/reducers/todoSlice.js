import { createSlice, nanoid } from "@reduxjs/toolkit";

 export const todoSlice = createSlice({
    name: 'Todos',
    initialState:{
        todo:[]
    },
    reducers:{
        addTodo:(state , action)=>{
            state.todo.push({
                title:action.payload.title,
                id: nanoid()
            })
        },
        removeTodo:(state , action)=>{
            state.todo.splice(action.payload.index , 1)
        },
        editTodo:(state , action)=>{
            state.todo.splice(action.payload.index , 1 , {
                title : updatedVal,
                id:nanoid()
            })
        }
    }
 })
 export const {addTodo , removeTodo , editTodo} = todoSlice.actions
 export default todoSlice.reducer