import React from "react";

const Task = ({ task, onToggleComplete, onDelete }) => {
  return (
    <li>
      <input type="checkbox" checked={task.completed} onChange={() => onToggleComplete(task.id)} />
      <span style={{ textDecoration: task.completed ? '' : 'none' }}>{task.title}</span>
      <button onClick={() => onDelete(task.td)}>Delete</button>
    </li>
  )
}

export default Task;