import {useState} from 'react'

const TaskForm = ({createTask}) => {

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')




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
    <div>
        <form onSubmit={hadleSubmit}>
            <input placeholder='Escribe un titulo'
            onChange={(e)=> 
                setTitle(e.target.value)
            }
            value={title}
            autoFocus
             />
            <textarea placeholder='Escribe una tarea'
            onChange={e => setDescription(e.target.value)}
            value={description}
            ></textarea>
            <button>Guardar</button>
        </form>
    </div>
  )
}

export default TaskForm