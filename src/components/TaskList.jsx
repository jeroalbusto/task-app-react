import TaskCard from "./TaskCard"
import {useContext} from 'react'
import {TaskContext} from '../context/TaskContext'



//puedo usar props o el objeto como parametro
const TaskList = () => {

  const {tasks} = useContext(TaskContext)

    if(tasks.length===0){
        return <h1>No hay Tareas</h1>
    }



  return (
    <div>
        {tasks.map(t => (
            <TaskCard key={t.id} t={t}/>
        ))}
    </div>
  )
}

export default TaskList