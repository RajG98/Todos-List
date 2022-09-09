import React from 'react'
import { Todo } from './Todo';


export const Todos = ({ todos, onDelete }) => {
  let myStyle = {
    minHeight: "70vh",
    margin:"40px auto"
  }
  return (
    <div className='container' style={myStyle}>
      <h3 className='my-3'>Todos List</h3>
      {todos.length === 0 ? "No Todos to Display!" :
        todos.map((todo) => <Todo todo={todo} key={todo.sno} onDelete={onDelete} />) 
      }
    </div>
  )

}
