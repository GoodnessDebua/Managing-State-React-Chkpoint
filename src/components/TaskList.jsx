import React from 'react';
import TaskItem from './TaskItem'; 

function TaskList({ tasks, editTask, deleteTask, toggleTaskCompletion }) {
  return (
    <div className="task-list">
      {tasks.length === 0 ? (
        <p>Add list of task as desired!</p>
      ) : (
        tasks.map(task => (
          <TaskItem 
            key={task.id} 
            task={task} 
            editTask={editTask} 
            deleteTask={deleteTask} 
            toggleTaskCompletion={toggleTaskCompletion} 
          />
        ))
      )}
    </div>
  );
}

export default TaskList;
