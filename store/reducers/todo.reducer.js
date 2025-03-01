

export const SET_TODOS = 'SET_TODOS'
export const SET_IS_LOADING = 'SET_IS_LOADING'

const initialState = {
    todos: [],
    isLoading: false,
    filterBy: []
}


export function todoReducer(state = initialState, cmd = {}) {
    switch (cmd.type) {
        case SET_TODOS:
            return {
                ...state,
                todos: cmd.todos
            }
        case SET_IS_LOADING:
            return {
                ...state,
                isLoading: cmd.isLoading
            }
        default:
            return state
    }
}