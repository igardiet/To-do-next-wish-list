import { useState } from 'react'
import Form from './components/Form'
import AllTasks from './components/AllTasks'


function App() {
  const [tasks, setTasks] = useState([])

  const addTask = (task) => {
    setTasks(prevState => [...prevState, task])
  }
  
  const editTask = (id) => {
    setTasks(prevState => prevState.map(t => (t.id == id ? { ...t, checked: !t.checked } : t)))
  }

  const deleteTask = (id) => {
    setTasks(prevState => prevState.filter(t => t.id !== id))
  }

  return (
    <div className="container">
      <header>
        <h1>To do list</h1>
      </header>
      <Form addTask={addTask} />
      {tasks && (<AllTasks tasks={tasks} editTask={editTask} deleteTask={deleteTask} />)}
    </div>
  )
}

export default App
