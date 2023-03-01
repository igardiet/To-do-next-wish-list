import { useState } from "react";
import EachTaskStyle from "./EachTask.module.css";
import { CheckIcon } from "@heroicons/react/24/outline";
import { PencilIcon } from "@heroicons/react/24/outline";
import { TrashIcon } from "@heroicons/react/24/outline";


const EachTask = ({ task, editMode, editTask , deleteTask }) => {
  const [isChecked, setIsChecked] = useState(task.checked);

  const setCheckbox = (e) => {
    setIsChecked(!isChecked);
    editTask(task.id)
  };

  return (
    <li className={EachTaskStyle.task}>
      <div className={EachTaskStyle["task-group"]}>
        <input
          className={EachTaskStyle.checkbox}
          type="checkbox"
          name={task.name}
          id={task.id}
          checked={isChecked}
          onChange={setCheckbox}
        />
        <label htmlFor={task.id} className={EachTaskStyle.label}>
          {task.name}
          <p className={EachTaskStyle.checkmark}>
            <CheckIcon strokeWidth={8} width={20} height={20} />
          </p>
        </label>
      </div>
      <div className={EachTaskStyle["task-group"]}>
        <button className="btn" onClick={() => editMode(task)} aria-label={`Update ${task.name} Task`}>
            <PencilIcon width={20} height={20} />
        </button>
        <button className={`btn ${EachTaskStyle.delete}`} aria-label={`Delete ${task.name} Task`} onClick={() => deleteTask(task.id)}>
            <TrashIcon width={20} height={20} />
        </button>
      </div>
    </li>
  );
};
export default EachTask;
