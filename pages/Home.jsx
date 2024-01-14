import React, { useState } from "react";
import AddTask from "../component/AddTask";
import TaskList from "../component/TaskList";
import { initialList } from "../data/taskData";

let nextId = 4;

function Home({ tasks, setTasks }) {
  function handleAddItem(newTask) {
    setTasks((prevTasks) => [
      ...prevTasks,
      {
        id: nextId++,
        title: newTask.title,
        done: false,
        prioritize: newTask.prioritize,
      },
    ]);
  }

  function handleEditItem(editedItem) {
    setTasks(tasks.map((t) => (t.id === editedItem.id ? editedItem : t)));
  }

  function handleDeleteItem(itemId) {
    setTasks(tasks.filter((t) => t.id !== itemId));
  }

  return (
    <>
      <AddTask addItem={handleAddItem} />
      <TaskList
        tasks={tasks}
        onEditItem={handleEditItem}
        onDeleteItem={handleDeleteItem}
      />
    </>
  );
}

export default Home;
