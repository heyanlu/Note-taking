import React from "react";
import Task from "./Task";
import "./TaskList.css";

function TaskList({ tasks, onEditItem, onDeleteItem }) {
  const sortedTasks = [...tasks].sort((a, b) => b.prioritize - a.prioritize);

  return (
    <ul className="tasks-container">
      {sortedTasks.map((task) => (
        <li className="task-container" key={task.id}>
          <Task task={task} editItem={onEditItem} deleteItem={onDeleteItem} />
        </li>
      ))}
    </ul>
  );
}

export default TaskList;