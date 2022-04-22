import React, {useState, useRef, useEffect} from 'react';
import {useDispatch} from 'react-redux'
import {addTodo} from '../../redux/actions'
import './todoInput.css'

const TodoInput = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  })

  // if(!name.text || /^\s*$/.test(name.text)) {
  //   console.log('00000')
  // }

  const enterValue = async(e) => {
    if(e.key === 'Enter') { 
        dispatch(addTodo({
          id: new Date().getTime().toString(),
          data: name
        }), setName(''))
      }
  }

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
              ref={inputRef}
              onKeyPress={enterValue}
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