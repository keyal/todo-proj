import { todoService } from "../../services/todo.service.js"
import { SET_IS_LOADING, SET_TODO_FILTER, SET_TODOS } from "../reducers/todo.reducer.js"
import { store } from "../store.js"

export function loadTodos(filterBy) {
    store.dispatch({ type: SET_IS_LOADING, isLoading: true })
    return todoService.query(filterBy)
        .then(todos => {
            store.dispatch({ type: SET_TODOS, todos })
        })
        .catch(err => {
            console.error('err:', err)
            showErrorMsg('Cannot load todos')
        })
        .finally(() => {
            store.dispatch({ type: SET_IS_LOADING, isLoading: false })
        })
}

export function setTodoFilter(filterBy) {
    // console.log('in setTodoFilter action. filterBy:', filterBy)
    store.dispatch({ type: SET_TODO_FILTER, filterBy })
    return Promise.resolve(filterBy)
}