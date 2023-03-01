import { useState, useEffect } from "react";
import { CheckIcon } from "@heroicons/react/24/solid";

const EditForm = ({ editedTask, updateTask, exitEditMode }) => {
  const [editedTaskName, setEditedTaskName] = useState(editedTask.name);

  useEffect(() => {
    const closeModal = (e) => {
      e.key == "Escape" && exitEditMode();
    };

    window.addEventListener("keydown", closeModal);
    return () => {
      window.removeEventListener("keydown", closeModal)
    }
  }, [exitEditMode]);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    updateTask({ ...editedTask, name: editedTaskName });
  };

  return (
    <div role="dialog" aria-labelledby="editTask" onClick={(e) => {e.target == e.currentTarget && exitEditMode()}}>
      <form className="todo" onSubmit={handleFormSubmit}>
        <div className="wrapper">
          <input
            type="text"
            id="editTask"
            className="input"
            value={editedTaskName}
            onInput={(e) => setEditedTaskName(e.target.value)}
            required
            autoFocus
            maxLength={100}
            placeholder="Edit task"
          />
          <label htmlFor="editTask" className="label">
            Edit task
          </label>
        </div>
        <button className="btn" aria-label={`${editedTaskName}`} type="submit">
          <CheckIcon strokeWidth={2} height={20} width={20} />
        </button>
      </form>
    </div>
  );
};

export default EditForm;
