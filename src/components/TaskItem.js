import React from "react";
import {FaTimes} from 'react-icons/fa';

const TaskItem = ({ task, onDelete}) => {
  return (
    <div className="task">
      <h3>{task.taskName} <FaTimes onClick={()=>onDelete(task.id)} style={{color:'red',cursor:'pointer'}}/></h3>
      <p>Expected Time: {task.expectedTime}</p>
    </div>
  );
};

export default TaskItem;
