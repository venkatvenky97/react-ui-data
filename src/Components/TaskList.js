import Task from './Task'

const TaskList = ({ tasks, onToggleComplete, onDelete }) => {
  console.log(tasks)
  return (
    <ul>
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          onToggleComplete={onToggleComplete}
          onDelete={onDelete}
        />
      ))}
    </ul>
  )
}
export default TaskList;