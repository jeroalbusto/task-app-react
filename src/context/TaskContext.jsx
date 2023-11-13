import {createContext, useState, useEffect} from 'react'
import {tasks as data} from '../data/tasks'

export const TaskContext = createContext()

export const TaskContextProvider = (props) => {

  const [tasks, setTasks] = useState([])

  //funcion que crea una tarea
  const createTask = (ta) => {
    setTasks([...tasks, {
      title: ta.title,
      id: tasks.length,
      description: ta.description
    }])
  }


  const deleteTask = (taskId) => {
    setTasks(tasks.filter(t => t.id !== taskId))
  }


  useEffect(()=>{
    setTasks(data)
},[])


  return (
    <TaskContext.Provider value={{
      tasks,
      deleteTask,
      createTask
    }}>
        {props.children}
    </TaskContext.Provider>
  )
}
