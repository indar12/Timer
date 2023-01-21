import React from "react";
import TaskItem from "./TaskItem";

const Tasks = ({ tasks, onDelete }) => {
  return (
    <>
      {tasks.map((task, index) => (
        <TaskItem key={index} task={task} onDelete={onDelete}/>
      ))}
    </>
  );
};

export default Tasks;
