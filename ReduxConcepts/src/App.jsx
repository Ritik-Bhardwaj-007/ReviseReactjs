import { useState } from 'react'
import './App.css'
import AddTodo from './Components/AddTodo'
import SimpleTodo from './Components/SimpleTodo'


function App() {
  return (
    <>
      <h1>Learn About Redux Toolkit </h1>
      <AddTodo/>
      <SimpleTodo/>
    </>
  )
}

export default App
