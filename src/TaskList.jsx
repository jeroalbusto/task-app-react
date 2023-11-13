import {tasks as data} from './tasks'
import {useState, useEffect} from 'react'


const TaskList = () => {

    const [tasks, setTasks] = useState([])


    useEffect(()=>{
        setTasks(data)
    },[])


    if(tasks.length===0){
        return <h1>No hay Tareas</h1>
    }



  return (
    <div>
        {tasks.map(t => (<div key={t.id}>
            <h1>{t.title}</h1>
            <p>{t.description}</p>
        </div>) )}
    </div>
  )
}

export default TaskList