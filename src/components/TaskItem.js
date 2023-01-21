import React from "react";

const TaskItem = ({ task }) => {
  return (
    <div className="task">
      <h3>{task.taskName}</h3>
      <p>Expected Time: {task.expectedTime}</p>
    </div>
  );
};

export default TaskItem;
