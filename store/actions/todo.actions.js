import { todoService } from "../../services/todo.service.js"
import { SET_IS_LOADING, SET_TODOS } from "../reducers/todo.reducer.js"
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
            console.log('set is loading here')
            store.dispatch({ type: SET_IS_LOADING, isLoading: false })
        })
}