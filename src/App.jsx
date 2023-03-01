import { useState } from "react";
import useLocalStorage from "./hooks/useLocalStorage";
import Form from "./components/Form";
import EditForm from "./components/EditForm";
import AllTasks from "./components/AllTasks";
import ThemeShift from './components/ThemeShift'

function App() {
  const [tasks, setTasks] = useLocalStorage("To-do-list-wish-list", []);
  const [editedTask, setEditedTask] = useState(null);
  const [editing, setEditing] = useState(false);
  const [preFocus, setPreFocus] = useState(null);

  const addTask = (task) => {
    setTasks((prevState) => [...prevState, task]);
  };

  const editTask = (id) => {
    setTasks((prevState) =>
      prevState.map((t) => (t.id == id ? { ...t, checked: !t.checked } : t))
    );
  };

  const updateTask = (task) => {
    setTasks((prevState) =>
      prevState.map((t) => (t.id == task.id ? { ...t, name: task.name } : t))
    );
    exitEditMode();
  };

  const exitEditMode = () => {
    setEditing(false);
    preFocus.focus();
  };

  const deleteTask = (id) => {
    setTasks((prevState) => prevState.filter((t) => t.id !== id));
  };

  const editMode = (task) => {
    setEditedTask(task);
    setEditing(true);
    setPreFocus(document.activeElement);
  };

  return (
    <div className="container">
      {/* <header>
        <h1>To do list</h1>
      </header> */}
      {editing && (
        <EditForm
          editedTask={editedTask}
          updateTask={updateTask}
          exitEditMode={exitEditMode}
        />
      )}
      <Form addTask={addTask} />
      {tasks && (
        <AllTasks
          tasks={tasks}
          editMode={editMode}
          editTask={editTask}
          deleteTask={deleteTask}
        />
      )}
      <ThemeShift />
    </div>
  );
}

export default App;
