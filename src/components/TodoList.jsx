import './TodoList.css'

const TodoList = ({ todos, onComplete, onDelete, onUpdate }) => {
    return (
        todos.map((todo, index) => (
            <div className="todo-item" key={index}>
                <div className="todo-options">
                    <div className="complete" >
                        <input className="check-btn" type="checkbox" defaultChecked={todo.done} onClick={() => onComplete(todo.id)}/>
                    </div>
                    <div className="update">
                        <svg className="update-btn" onClick={() => onUpdate(todo.id)} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                            <path d="M3 21h18v2H3zM5.98 13.8L14.74 5l3.18 3.17-8.76 8.76-3.18-3.17zm12.82-7.06l-1.41-1.41a1 1 0 0 1 0-1.42l2.83-2.83a1 1 0 0 1 1.42 0l1.41 1.41a1 1 0 0 1 0 1.42l-2.83 2.83a1 1 0 0 1-1.42 0z"/>
                        </svg> 
                    </div>
                    <div className={`todo-name ${todo.done && 'todo-completed'}`} >{todo.name}</div>
                </div>
                <div className="remove" >
                    <svg className={`remove-btn ${!todo.done && 'todo-remove-disabled'}`}  onClick={() => onDelete(todo.id)} xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
                        <path d="M0 0h24v24H0z" fill="none"/>
                        <path d="M16 9v10H8V9h8m-1.5-6H9.5l-1 1H5v2h14V4h-3.5l-1-1z"/>
                    </svg>
                </div>
            </div>
        ))
    )
}

export default TodoList;