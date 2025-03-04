

export const SET_TODOS = 'SET_TODOS'
export const SET_IS_LOADING = 'SET_IS_LOADING'
export const SET_TODO_FILTER = 'SET_TODO_FILTER'

const initialState = {
    todos: [],
    isLoading: false,
    filterBy: { txt: '', importance: 0 }
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
        case SET_TODO_FILTER:
            return {
                ...state,
                filterBy: cmd.filterBy
            }
        default:
            return state
    }
}