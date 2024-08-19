import React, { useState, useEffect } from 'react';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    setTasks(savedTasks);
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (task) => {
    setTasks([...tasks, { ...task, id: Date.now(), completed: false }]);
  };

  const editTask = (updatedTask) => {
    setTasks(tasks.map(task => task.id === updatedTask.id ? updatedTask : task));
  };

  const deleteTask = (taskId) => {
    if (window.confirm('Are you sure you want to delete this task?')) {
      setTasks(tasks.filter(task => task.id !== taskId));
    }
  };

  const toggleTaskCompletion = (taskId) => {
    setTasks(
      tasks.map(task => task.id === taskId ? { ...task, completed: !task.completed } : task)
    );
  };

  return (
    <div className="App">
      <h1>To-Do List</h1>
      <TaskForm addTask={addTask} />
      <TaskList 
        tasks={tasks} 
        editTask={editTask} 
        deleteTask={deleteTask} 
        toggleTaskCompletion={toggleTaskCompletion} 
      />
    </div>
  );
}

export default App;







































// import React, { useState, useEffect } from 'react';
// import TaskList from './components/TaskList';
// import TaskForm from './components/TaskForm';
// import TaskItems from './components/TaskItem';
// import './App.css';

// function App() {
//   const [tasks, setTasks] = useState([]);

//   useEffect(() => {
//     const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
//     setTasks(savedTasks);
//   }, []);

//   useEffect(() => {
//     localStorage.setItem('tasks', JSON.stringify(tasks));
//   }, [tasks]);

//   const addTask = (task) => {
//     setTasks([...tasks, { ...task, id: Date.now(), completed: false }]);
//   };

//   const editTask = (updatedTask) => {
//     setTasks(tasks.map(task => task.id === updatedTask.id ? updatedTask : task));
//   };

//   const deleteTask = (taskId) => {
//     if (window.confirm('Are you sure you want to delete this task?')) {
//       setTasks(tasks.filter(task => task.id !== taskId));
//     }
//   };

//   const toggleTaskCompletion = (taskId) => {
//     setTasks(
//       tasks.map(task => task.id === taskId ? { ...task, completed: !task.completed } : task)
//     );
//   };

//   return (
//     <div className="App">
//       <h1>To-Do List</h1>
//       <TaskForm addTask={addTask} />
//       <TaskList 
//         tasks={tasks} 
//         editTask={editTask} 
//         deleteTask={deleteTask} 
//         toggleTaskCompletion={toggleTaskCompletion} 
//       />
//       <TaskItems tasks={tasks} />
//     </div>
//   );
// }

// export default App;
