import React, { useState } from 'react'
import TodoForm from './TodoForm'
import TodoList from './TodoList'

function TodoListApp() {
    const [todos, setTodos] = useState([])

    const addTodo =(todo)=>{
        //입력된 값으로 todos를 업데이트
        setTodos([...todos,todo])
    }
    const deleteTodo =(deleteTodo)=>{
        const updatedTodo = todos.filter((_, i) => i !== deleteTodo);
        setTodos(updatedTodo);
    }
    
  return (
    <div>
        <h1>할일 목록</h1>
        <TodoForm addTodo={addTodo}/>
        <TodoList todos={todos} deleteTodo={deleteTodo}/>
    </div>
  )
}

export default TodoListApp