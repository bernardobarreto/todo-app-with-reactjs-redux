import { useSelector, useDispatch } from 'react-redux';
import { deleteTodo } from '../actions';

const TaskList = () => {
  const tasks = useSelector((state) => state.tasks.tasks);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteTodo(id));
  }

  return (
    <div className='task-list'>
      <div className='display-tasks'>
        <h3>Your tasks:</h3>
        <ul>
          {tasks.map((task) => (
            <li className='task' key={task.id}>
              {task.text}
              <button className='delete-btn' onClick={() => handleDelete(task.id)}>delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default TaskList;