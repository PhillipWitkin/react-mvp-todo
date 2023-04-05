import './App.css';
import React, { useState, useEffect } from 'react';
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import { nanoid } from "nanoid";

function App() {

  // manage app level state
  const [tasks, setTasks] = useState([]);

  // add a new task to the state 'tasks'
  const createTodo = (taskName, description) => {
    // Make API call POST to /api/tasks
    // data.id
    // if sucessful, alter state by adding new task
    const newTask = { id: "todo-" + nanoid, taskName: taskName, description: description, completed: false };
    setTasks([...tasks, newTask]);
  }

  const editTodo = (id, newTaskName, newDescription) => {
    // Make PUT/PATCH to api/tasks/:id
    // if sucessful, alter state by changing specific task in array
    setTasks(tasks.map(task => {
      if (task.id === id){
        return {...tasks, taskName: newTaskName, description: newDescription}
      }
    }));
  }

  return (
    <div className='container'>

    <AddTodo 
      createTodo = {createTodo}
      tasks = {tasks}
    />
    </div>

  );
}

export default App;