import React, { useState } from 'react'

function TodoForm(props) {
    const {addTodo} = props
    const [todo, setTodo] = useState('')

    const handleSubmit = (e)=>{
        e.preventDefault();
        addTodo(todo);  //addTodo함수에 할일(todo)전달
        setTodo('');
    }
  return (
    <form onSubmit={handleSubmit}>
        <input type='text'
        value={todo}
        onChange={(e)=>setTodo(e.target.value)} //입력창 상태 변경될 경우 todo 상태 변경
        placeholder='할일을 입력하세요.'/>
        <button type='submit'>추가</button>
    </form>
  )
}

export default TodoForm