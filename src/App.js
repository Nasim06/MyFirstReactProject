import React, {useState, useRef, useEffect} from 'react'
import ToDoList from './ToDoList'
import {v4 as uuidv4} from 'uuid'

const STORAGE_KEY = 'todoApp.todos'

function App() {
  const [todos, setTodos ] = useState([])
  const todoNameRef = useRef()

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(STORAGE_KEY))
    if(storedTodos) setTodos(storedTodos)
  }, [])

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(todos))
  }, [todos])

  function toggleBox(id){
    const todosCopy = [...todos]
    const todo = todosCopy.find(todo => todo.id === id)
    todo.complete = !todo.complete
    setTodos(todosCopy)
  }

  function addTodo(e){
    const name = todoNameRef.current.value
    if(name === '') return
    setTodos(prevTodos => {
      return [...prevTodos, {id:uuidv4(), name:name,
         complete:false}]
    })
    todoNameRef.current.value = null
  }

  function clearTodos(){
    const newTodos = todos.filter(todo => !todo.complete)
    setTodos(newTodos)
  }


  return(
    <>
      <ToDoList todos={todos} toggleBox={toggleBox} />
      <input ref={todoNameRef} type="text" />
      <button onClick={addTodo}>Add</button>
      <button onClick={clearTodos}>Clear Complete</button>
      <div>{todos.filter(todo => !todo.complete).length} left to do</div>
    </>
  )
}

export default App;
