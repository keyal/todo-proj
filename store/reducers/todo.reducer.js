// import {} from "../../services/todo.service.js"

export const CASE_A = 'CASE_A'
export const CASE_B = 'CASE_B'

const initialState = {
    asdf: "asdf"
}


export function todoReducer(state = initialState, cmd = {}) {
    switch (cmd.type) {
        case CASE_A:
            console.log('case a')
            return state
        case CASE_B:
            console.log('case b')
            return state
        
        default:
            return state
    }
}