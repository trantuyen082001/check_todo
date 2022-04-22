import React from 'react'
import TodoItem from '../TodoItem/TodoItem'
import {useSelector} from 'react-redux'

const TodoList = () => {

  let todos = useSelector(state => state.todoList)

  return (
    <div className='todoList_Container'>
        {todos.map((todo) => {
          return <TodoItem key={todo.id} todo={todo}/>
        })}
    </div>
  )
}

export default TodoList