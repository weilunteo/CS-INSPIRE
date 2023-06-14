import {createSlice} from '@reduxjs/toolkit'

/* create reducer */
export const questionReducer = createSlice({
    name: 'questions',
    initialState: {
        queue: [],
        answers: [],
        trace: 0
    },
    reducers: {
        startAction: (state, action) => {
            let {question, answers} = action.payload
            return{
                ...state,
                queue: question,
                answers
            }
        },

        moveNextAction: (state) => {
            return {
                ...state,
                trace: state.trace + 1
            }
        },
        movePrevAction: (state) => {
            return {
                ...state,
                trace: state.trace - 1 
            }
        },
        resetAllAction: () => {
            return{
                queue: [],
                answers: [],
                trace: 0

            }
        }
    }
})

export const {startAction, moveNextAction, movePrevAction, resetAllAction} = questionReducer.actions

export default questionReducer.reducer;