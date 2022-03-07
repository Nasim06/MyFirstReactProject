import React from 'react'
import './CSS/style.css'

export default function todo({todo, toggleBox}) {

    function handleClick(){
        toggleBox(todo.id)
    }

  return (
    <div>
        <label>

            <input type="checkbox" checked={todo.complete} 
            onChange={handleClick} />
            {todo.name}

        </label>
    </div>
  )
}
