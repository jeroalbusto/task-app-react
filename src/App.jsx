import {useState, useEffect} from 'react'
import TaskList from "./components/TaskList";
import TaskForm from './components/TaskForm'
import {tasks as data} from './data/tasks'

function App() {

  const [tasks, setTasks] = useState([])


    useEffect(()=>{
        setTasks(data)
    },[])

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




  return (
    <>
      <TaskForm createTask={createTask}/>
      <TaskList tasks={tasks} deleteTask={deleteTask}/>
    </>
  );
}

export default App;
