import React, { useState } from "react";

const AddTask = ({ onAdd, editTaskId, editTaskFunc }) => {
  const [taskName, setTaskName] = useState("");
  const [expectedTime, setExpectedTime] = useState("");
  const onSubmit = (e) => {
    e.preventDefault();
    if (!taskName || !expectedTime) {
      alert("Please Enter the required fields");
      return;
    }
    if (editTaskId != null) {
      setTaskName("");
      setExpectedTime("");
      return editTaskFunc({ taskName, expectedTime });
    }
    onAdd({ taskName, expectedTime });
    setTaskName("");
    setExpectedTime("");
  };
  return (
    <form className="add-form" onSubmit={onSubmit}>
      <div className="form-control">
        <label>Task Name</label>
        <input
          type="text"
          placeholder="Enter the Task"
          value={taskName}
          onChange={(e) => {
            setTaskName(e.target.value);
          }}
        />
      </div>
      <div className="form-control">
        <label>Expected Time</label>
        <input
          type="number"
          placeholder="Enter the Allocated Time"
          value={expectedTime}
          onChange={(e) => {
            setExpectedTime(e.target.value);
          }}
        />
      </div>
      <input className="btn btn-block" type="submit" value="Start Task" />
    </form>
  );
};

export default AddTask;
