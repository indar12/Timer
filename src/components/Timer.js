import Header from "./Header";
import Tasks from "./Tasks";
import React, { useState } from "react";
import AddTask from "./AddTask";

const Timer = () => {
  const [editTaskId, setEditTaskId] = useState(null);
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState([
    {
      id: 1,
      taskName: "Doctor Appoinment",
      expectedTime: "3",
    },
    {
      id: 2,
      taskName: "Project work",
      expectedTime: "1",
    },
    {
      id: 3,
      taskName: "Food shopping",
      expectedTime: "0.5",
    },
  ]);
  const title = "Timer App";
  //add new task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1;
    const newTask = { id, ...task };
    setTasks([...tasks, newTask]);
  };
  //delete the task
  const deleteTask = (id) => {
    setTasks(tasks.filter((item) => item.id !== id));
  };
  function editFunc(id) {
    console.log("id", id);
    setEditTaskId(id);
    setShowAddTask(true);
  }
  function editTaskFunc(task) {
    setTasks(
      tasks.map((item) => {
        if (item.id === editTaskId) {
          return task;
        }
        return item;
      })
    );
  }
  return (
    <div className="container">
      <Header
        title={title}
        onToggle={() => {
          setShowAddTask(!showAddTask);
        }}
        showAddClose={showAddTask}
      />
      {showAddTask && (
        <AddTask
          onAdd={addTask}
          editTaskId={editTaskId}
          editTaskFunc={editTaskFunc}
        />
      )}
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} editFunc={editFunc} />
      ) : (
        "No Task"
      )}
    </div>
  );
};

export default Timer;
