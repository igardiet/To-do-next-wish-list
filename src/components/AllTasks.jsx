import EachTask from './EachTask'
import AllTaskStyles from './AllTasks.module.css'

const AllTasks = ({ tasks, editTask, deleteTask }) => {
  return (
    <ul className={AllTaskStyles.tasks}>
      {tasks.sort((a, b) => b.id - a.id).map(task => (
        <EachTask
          key={task.id}
          task={task}
          editTask={editTask}
          deleteTask={deleteTask}
        />
      ))}
    </ul>
  )
}
export default AllTasks