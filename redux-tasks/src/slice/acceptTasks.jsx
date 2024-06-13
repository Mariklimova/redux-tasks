import { createSlice } from '@reduxjs/toolkit'

const acceptTasks = createSlice({
    name: 'acceptTasks ',
    initialState: {
        arr: ['task1', 'task2', 'task3', 'task4'],
        inp: ''
    },
    reducers: {
        'addTasks': (state) => {
            return { ...state, arr: [...state.arr, state.inp] }
        },
        'inpValue': (state, data) => {
            return { ...state, inp: data.payload }
        },
        'delTasks': (state, data) => {
            return { ...state, arr: state.arr.filter((el) => el != data.payload) }
        }

    }
});

export const { addTasks, inpValue, delTasks } = acceptTasks.actions;
export default acceptTasks.reducer;