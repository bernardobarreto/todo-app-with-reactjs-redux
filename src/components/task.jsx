import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../actions';

const Task = () => {
  const dispatch = useDispatch();
  const inputRef = useRef(null);

  function addNewTask() {
    const task = inputRef.current.value.trim();
    if (task !== '') {
      dispatch(addTodo(task));
      inputRef.current.value = '';
    }
  }

  return (
    <div className='task-component'>
      <div className='add-task'>
        <input
          type='text'
          placedholder='Add a new task here...'
          ref={inputRef}
          className='task-input'
        ></input>
        <button onClick={addNewTask}>Add task</button>
      </div>
    </div>
  )
}

export default Task;