import React, { useState } from 'react';

function TaskItem({ task, editTask, deleteTask, toggleTaskCompletion }) {
  const [isEditing, setIsEditing] = useState(false);
  const [taskName, setTaskName] = useState(task.name);
  const [taskDescription, setTaskDescription] = useState(task.description);

  const handleEdit = () => {
    setIsEditing(!isEditing);
  };

  const handleSave = () => {
    if (taskName.trim() && taskDescription.trim()) {
      editTask({ ...task, name: taskName, description: taskDescription });
      setIsEditing(false);
    } else {
      alert("Please fill in both task name and description.");
    }
  };

  const handleDelete = () => {
    if (window.confirm(`Are you sure you want to delete task "${task.name}"?`)) {
      deleteTask(task.id);
    }
  };

  return (
    <div className={`task-item ${task.completed ? 'completed' : ''}`}>
      {isEditing ? (
        <div>
          <input
            type="text"
            value={taskName}
            onChange={(e) => setTaskName(e.target.value)}
          />
          <textarea
            value={taskDescription}
            onChange={(e) => setTaskDescription(e.target.value)}
          />
          <button onClick={handleSave}>Save</button>
          <button onClick={handleEdit}>Cancel</button>
        </div>
      ) : (
        <div>
          <h3>{task.name}</h3>
          <p>{task.description}</p>
          <button onClick={() => toggleTaskCompletion(task.id)}>
            {task.completed ? 'Mark as Incomplete' : 'Mark as Complete'}
          </button>
          <button onClick={handleEdit}>Edit</button>
          <button onClick={handleDelete}>Delete</button>
        </div>
      )}
    </div>
  );
}

export default TaskItem;









// import React, { useState } from 'react';
// // import TaskItem from './TaskItem.jsx';


// function TaskItem({ task, editTask, deleteTask, toggleTaskCompletion }) {
//   const [isEditing, setIsEditing] = useState(false);
//   const [taskName, setTaskName] = useState(task.name);
//   const [taskDescription, setTaskDescription] = useState(task.description);

//   const handleEdit = () => {
//     setIsEditing(!isEditing);
//   };

//   const handleSave = () => {
//     editTask({ ...task, name: taskName, description: taskDescription });
//     setIsEditing(false);
//   };

//   return (
//     <div className={`task-item ${task.completed ? 'completed' : ''}`}>
//       {isEditing ? (
//         <div>
//           <input
//             type="text"
//             value={taskName}
//             onChange={(e) => setTaskName(e.target.value)}
//           />
//           <textarea
//             value={taskDescription}
//             onChange={(e) => setTaskDescription(e.target.value)}
//           />
//           <button onClick={handleSave}>Save</button>
//         </div>
//       ) : (
//         <div>
//           <h3>{task.name}</h3>
//           <p>{task.description}</p>
//           <button onClick={() => toggleTaskCompletion(task.id)}>
//             {task.completed ? 'Mark as Incomplete' : 'Mark as Complete'}
//           </button>
//         </div>
//       )}
//       <button onClick={handleEdit}>{isEditing ? 'Cancel' : 'Edit'}</button>
//       <button onClick={() => deleteTask(task.id)}>Delete</button>
//     </div>
//   );
// }

// export default TaskItem;




