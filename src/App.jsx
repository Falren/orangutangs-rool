import { Provider } from 'react-redux';
import store from './redux/store'
import TaskForm from './components/TaskForm';

const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <h1 data-task-header='task-header'>To-Do List</h1>
        <TaskForm />
      </div>
    </Provider>
  );
};

export default App;
