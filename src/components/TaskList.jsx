import TaskCard from "./TaskCard"
import {useContext} from 'react'
import {TaskContext} from '../context/TaskContext'



//puedo usar props o el objeto como parametro
const TaskList = () => {

  const {tasks} = useContext(TaskContext)

    if(tasks.length===0){
        return <h1 className="text-white text-center m-10 font-bold text-5xl">No hay Tareas</h1>
    }



  return (
    <div className="grid grid-cols-3 gap-4">
        {tasks.map(t => (
            <TaskCard key={t.id} t={t}/>
        ))}
    </div>
  )
}

export default TaskList