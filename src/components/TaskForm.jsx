import { useSelector,  useDispatch} from 'react-redux';

const TaskForm = () => {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks);
  const task = useSelector((state) => state.task);
  const addTask = (event) => {
    event.preventDefault()
    dispatch({ type: 'ADD_TASK', payload: task.text })
    dispatch({ type: 'SET_INPUT_TEXT', payload: '' })
  }

  return (
    <div>
      <form>
        <input data-task-input-id="task" value={task.text} onChange={(event) => dispatch({ type: 'SET_INPUT_TEXT', payload: event.target.value })} />
        <button
          
          type='submit'
          onClick={ addTask }
        >
          Add Task
        </button>
      </form>
      <p>This is task text {task.text} </p>
      {
        tasks.map(task => 
          <div data-delete-task="delete" className="delete-task" key={task.id}>
            <p>{task.text}</p>
            <button onClick={() => dispatch({type: 'REMOVE_TASK', payload: task.id})}>
              Delete Task
            </button>
          </div>  
        )
      }
    </div>
  );
}

export default TaskForm;
