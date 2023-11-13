import TaskCard from "./TaskCard"


//puedo usar props o el objeto como parametro
const TaskList = ({tasks, deleteTask}) => {

    if(tasks.length===0){
        return <h1>No hay Tareas</h1>
    }



  return (
    <div>
        {tasks.map(t => (
            <TaskCard key={t.id} t={t} deleteTask={deleteTask} />
        ))}
    </div>
  )
}

export default TaskList