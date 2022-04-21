import React, {useState} from 'react';
import {useDispatch} from 'react-redux'
import {addTodo} from '../../redux/actions'
import './todoInput.css'

const TodoInput = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');

  return (
    <div className='todoInput_container'>
        <h3>Hôm nay bạn có gì không?</h3>
        <div className='row'>
            <input
              className='input_todo' 
              type='text'
              value={name}
              placeholder='Thêm công việc...'
              onChange={(e) => setName(e.target.value)}
            />
            <button
              className='btn_todo'
              onClick={() => {
                dispatch(addTodo({
                  id: new Date().getTime().toString(),
                  data: name
                }), setName(''))
              }}
            >Thêm mới</button>
        </div>
    </div>
  )
}

export default TodoInput