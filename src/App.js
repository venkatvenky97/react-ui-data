import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux'
import AddList from "./Components/AddList";
import Task from "./Components/Task";
import TaskList from "./Components/TaskList";
import axios from 'axios'
import { addTask, deleteTask, setTask } from './Redux/action'


const App = () => {
  const dispatch = useDispatch()
  const tasks = useSelector((state) => state.tasks)
  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/todos')
      .then((response) => dispatch(setTask(response.data)))
      .catch((error) => {
        console.log(error)
      })
  }, [dispatch])



  const handleAddTask = (title) => {
    const newTask = { id: Date.now(), title, compeleted: false };
    dispatch(addTask(newTask))
  }
  return (
    <div className="App">
      <h1>Data Display List</h1>
      <AddList onAddTask={handleAddTask} />
      <TaskList tasks={tasks} />
      <Task />

    </div>
  );
}

export default App;
