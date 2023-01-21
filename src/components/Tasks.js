import React from "react";
const tasks = [
  {
    id: 1,
    taskName: "Doctor Appoinment",
    expectedTime: 3,
  },
  {
    id: 2,
    taskName: "Project work",
    expectedTime: 1,
  },
  {
    id: 3,
    taskName: "Food shopping",
    expectedTime: 0.5,
  },
];

const Tasks = () => {
  return (
    <>
      {tasks.map((task) => (
        <h3>{task.taskName}</h3>
      ))}
    </>
  );
};

export default Tasks;
