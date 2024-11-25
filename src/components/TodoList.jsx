import './TodoList.css'

const TodoList = ({ todos, onComplete, onDelete }) => {
    return (
        todos.map((todo, index) => (
            <div className={`todo-item ${todo.done && 'todo-completed'}`} key={index}>
                <div className="todo-name" >{todo.name}</div>
                <div className="todo-options">
                    <div className="complete" onClick={() => onComplete(todo.id)}>
                        <svg className="check-btn" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" fill='#000C14'>
                            <path d="M0 0h24v24H0z" fill="none"/>
                            <path d="M9 16.2l-3.5-3.6L4 14l5 5 10-10-1.4-1.4z"/>
                        </svg>
                    </div>

                    <div className="remove" onClick={() => onDelete(todo.id)}>
                        <svg className="remove-btn" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" fill='#000C14'>
                            <path d="M0 0h24v24H0z" fill="none"/>
                            <path d="M16 9v10H8V9h8m-1.5-6H9.5l-1 1H5v2h14V4h-3.5l-1-1z"/>
                        </svg>
                    </div>
                </div>
            </div>
        ))
    )
}

export default TodoList;