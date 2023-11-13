import {useState, useContext} from 'react'
import {TaskContext} from '../context/TaskContext'

const TaskForm = () => {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const {createTask} = useContext(TaskContext)



    const hadleSubmit = (e)=>{
        e.preventDefault()
        createTask({
            title,
            description
        });
        setTitle('')
        setDescription('')
    }




  return (
    <div className='max-w-md mx-auto'>
        <form onSubmit={hadleSubmit} className='bg-slate-800 p-10 rounded-md'>
            <h1 className='text-white text-2xl mb-4 font-bold'>Crear Tarea</h1>
            <input placeholder='Escribe un titulo'
            onChange={(e)=> 
                setTitle(e.target.value)
            }
            value={title}
            autoFocus
            className=' w-full p-3 mb-4 '
             />
            <textarea placeholder='Escribe una tarea'
            onChange={e => setDescription(e.target.value)}
            value={description}
            className='w-full p-3 mb-4 resize-none h-44'
            ></textarea>
            <button className='bg-green-600 rounded-md text-white p-4 hover:bg-green-800'>Guardar</button>
        </form>
    </div>
  )
}

export default TaskForm