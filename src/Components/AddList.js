import React, { useState } from "react";

const AddList = () => {
  const [task, setTask] = useState('')
  console.log(task)
  const handleSubmit = (e) => {
    e.preventDefault()
    if (task) {
      setTask('')
    }
  }
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Enter New value" value={task} onChange={(e) => setTask(e.target.value)} />
      <button type="submit">submit</button>
    </form>
  )
}

export default AddList;