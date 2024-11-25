import { useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import TodoList from './components/TodoList'
import { DebounceInput } from 'react-debounce-input'
import './App.css';

function App() {
  const [todos, setTodos] = useState(JSON.parse(localStorage.getItem('todos')) || []);
  const [inputValue, setInputValue] = useState(localStorage.getItem('input') || '');
  
  useEffect(() => {
    localStorage.setItem('input', inputValue);
  }, [inputValue]);

  const handleAddTodo = () => {
    if (inputValue.trim()) {
      setTodos([
        ...todos,
        {
          id: uuidv4(),
          name: inputValue,
          done: false,
        },
      ]);
      setInputValue('');
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleAddTodo();
    }
  };

  const handleCompleteTodo = (id) => {
    const updatedTodoList = todos.map(todo => {
        if (todo.id === id) {
            return  {
              ...todo,
              done: !todo.done,
            }
        }
        return todo;
    });
    setTodos(updatedTodoList);
  };

  const handleUpdateTodo = (id) => {
    if (inputValue === '') {
      const index = todos.findIndex((todo) => todo.id === id);
      const updatedTodoList = [...todos];
      if (index !== -1 && confirm(`update todo item: ${todos[index].name}?`)) {
        updatedTodoList.splice(index, 1);
        setInputValue(todos[index].name);
        setTodos(updatedTodoList);
      }
    }
  }

  const handleDeleteTodo = (id) => {
    const index = todos.findIndex(todo => todo.id === id);
    const updateTodo = [...todos];
    if (index !== -1 && confirm(`remove todo item: ${todos[index].name}?`)) {
      
      updateTodo.splice(index, 1)      
    }
    setTodos(updateTodo);
  }

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  return (
    <div className="app-wrapper">
      <div className="addtodo-wrapper">
        <DebounceInput
          className="newtodo-input"
          spellCheck='false'
          debounceTimeout={100}
          placeholder='Create new task'
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}  
        />
        <button className="newtodo-btn" onClick={handleAddTodo}>Add Task</button>
      </div>
      <TodoList todos={todos} onComplete={handleCompleteTodo} onDelete={handleDeleteTodo} onUpdate={handleUpdateTodo} />
    </div>
  )
}

export default App
