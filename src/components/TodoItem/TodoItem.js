import React, {useState} from 'react';
import {useDispatch} from 'react-redux'
import {FiEdit3} from 'react-icons/fi'
import {AiFillDelete} from 'react-icons/ai'
import {GiCheckMark} from 'react-icons/gi'
import 'react-bootstrap'
import './todoItem.css'

import { deleteTodo, updateTodo } from '../../redux/actions';

const TodoItem = ({todo}) => {
  const [editTable, setEditTable] = useState(false);
  const [name, setName] = useState(todo.data);

  const dispatch = useDispatch();

  const enterValue = async(e) => {
    if(e.key === 'Enter') {
      setName(e.target.value)
      dispatch(updateTodo({
        ...todo,
        data: name
      }))
      setEditTable(!editTable)}
    }
  
  
  return (
      
    <div className='todoItem_container'>
        <div className='row m-0'>
            <div className='col'>
              {editTable ? <input 
                type='text' 
                value={name} 
                className='todoItem_input'
                onKeyPress={enterValue}
                onChange={(e) => setName(e.target.value)}
              /> : <h4>{todo.data}</h4>}
            </div>
            <div className='btn_container'>
                <button 
                  className='btn_edit'
                  onClick={() => {
                    dispatch(updateTodo({
                      ...todo,
                      data: name
                    }))
                    setEditTable(!editTable)}}
                    >
                  {editTable ? <GiCheckMark/> : <FiEdit3/>}  
                </button>
                <button className='btn_delete' onClick={() => dispatch(deleteTodo(todo.id))}>{<AiFillDelete/>}</button>
              </div>
        </div>
    </div>
  )
}

export default TodoItem