import React from 'react'

function TodoList(props) {
    const { todos, deleteTodo }=props
  return (
    <ul>
        {
            todos.map((todo, index)=>(
                <li key={index}>
                    {todo}
                    <button onClick={()=> deleteTodo(index)}>삭제</button>
                    </li>
            ))
        }
    </ul>
  )
}

export default TodoList