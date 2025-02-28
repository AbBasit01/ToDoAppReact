import React, { useState } from 'react';
import AddTaskForm from './AddTaskForm';
import TaskList from './TaskList';

export default function Home(){
  const [tasks, setTasks] = useState([]);

  function addTask(task){
    setTasks([...tasks, task]);
  };

  function deleteTask(taskIndex){
    setTasks(tasks.filter((task, index) => index !== taskIndex));
  };

  return (
    <div className="container mt-4">
      <h1>To-Do List</h1>
      <AddTaskForm addTask={addTask} />
      <TaskList tasks={tasks} deleteTask={deleteTask} />
    </div>
  );
};
