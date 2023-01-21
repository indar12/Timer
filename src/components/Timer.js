import Header from "./Header";
import Tasks from "./Tasks";
import React, { useState } from "react";

const Timer = () => {
  const [tasks, setTasks] = useState([
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
  ]);
  const title = "Timer App";
  //delete the task
  const deleteTask = (id) =>{
    setTasks(tasks.filter((item)=>item.id!==id))
  }
  return (
    <div className="container">
      <Header title={title} />
      {tasks.length>0 ? <Tasks tasks={tasks} onDelete={deleteTask}/> :  'No Task' }
    </div>
  );
};

export default Timer;
