import React, { useState } from "react";
import './Task.css'

function Task({ task, editItem, deleteItem }) {
  const [isEditing, setIsEditing] = useState(false);

  let taskContent;

  if (isEditing) {
    taskContent = (
      <>
        <input
          value={task.title}
          onChange={(e) => {
            editItem({
              ...task,
              title: e.target.value,
            });
          }}
        />
      </>
    );
  } else {
    taskContent = <>{task.done ? <del>{task.title}</del> : task.title}</>;
  }

  return (
    <>
      <div className="text-container">
        <input
          type="checkbox"
          checked={task.done}
          onChange={(e) => {
            editItem({
              ...task,
              done: e.target.checked,
            });
          }}
        />
        
        <span>{taskContent}</span>
      </div>
      <div className="button-container">
        {isEditing ? (
          <button className="save-edit-btn" onClick={() => setIsEditing(false)}>Save</button>
        ) : (
          <button className="save-edit-btn" onClick={() => setIsEditing(true)}>Edit</button>
        )}
        <button className="delete-btn" onClick={() => deleteItem(task.id)}>
          Delete
        </button>
      </div>
    </>
  );
}

export default Task;
