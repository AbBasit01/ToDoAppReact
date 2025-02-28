import React, { useState } from 'react';

export default function AddTaskForm({ addTask }){
  const [task, setTask] = useState('');

  const handleSubmit = (e) => {
    console.log("handleSubmit")
    e.preventDefault();
    if (task.trim()) {
      addTask(task);
      setTask('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-3">
      <div className="input-group">
        <input
          type="text"
          className="form-control"
          placeholder="Add new task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button type="submit" className="btn btn-primary">Add Task</button>
      </div>
    </form>
  );
};
