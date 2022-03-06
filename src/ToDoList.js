import React from 'react'
import Todo from './Todo'

export default function ToDoList({todos, toggleBox}) {
  return (

    todos.map(todo => {
        return <Todo key={todo.id} todo={todo} toggleBox={toggleBox}/>
        })
        
    )
}
