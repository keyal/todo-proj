import { setTodoFilter } from "../store/actions/todo.actions.js"

const { useEffect } = React
const { useSelector } = ReactRedux

export function TodoFilter() {

    // const [filterBy, setfilterBy] = useState({...filterBy})
    const filterBy = useSelector(storeState => storeState.todoModule.filterBy)

    // useEffect(() => {
    //     // Notify parent
    //     setTodoFilter(filterBy)
    // }, [filterBy])

    function handleChange({ target }) {
        const field = target.name
        let value = target.value

        switch (target.type) {
            case 'number':
            case 'range':
                value = +value || ''
                break

            case 'checkbox':
                value = target.checked
                break

            default: break
        }

        setTodoFilter({ ...filterBy, [field]: value })
    }

    // Optional support for LAZY Filtering with a button
    function onSubmitFilter(ev) {
        ev.preventDefault()
        setTodoFilter(filterBy)
    }

    const { txt, importance } = filterBy
    return (
        <section className="todo-filter">
            <h2>Filter Todos</h2>
            <form onSubmit={onSubmitFilter}>
                <input value={txt} onChange={handleChange}
                    type="search" placeholder="By Txt" id="txt" name="txt"
                />
                <label htmlFor="importance">Importance: </label>
                <input value={importance} onChange={handleChange}
                    type="number" placeholder="By Importance" id="importance" name="importance"
                />

                <button hidden>Set Filter</button>
            </form>
        </section>
    )
}