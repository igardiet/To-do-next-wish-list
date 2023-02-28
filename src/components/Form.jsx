import { useState } from "react";
import { PlusIcon } from "@heroicons/react/24/solid";

const Form = ({ addTask }) => {
    const [task, setTask] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();
    addTask({
        name: task,
        checked: false,
        id: Date.now()
    })
    setTask('')
  };
  
  return (
    <form className="todo" onSubmit={handleFormSubmit}>
      <div className="wrapper">
        <input
          type="text"
          id="task"
          className="input"
          value={task}
          onInput={(e) => setTask(e.target.value)}
          required
          autoFocus
          maxLength={100}
          placeholder="Enter task"
        />
        <label htmlFor="task" className="label">
          Enter task
        </label>
      </div>
      <button className="btn" aria-label="Add task" type="submit">
        <PlusIcon />
      </button>
    </form>
  );
};

export default Form;
