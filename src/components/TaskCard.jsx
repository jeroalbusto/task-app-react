import {useContext} from 'react'
import {TaskContext} from '../context/TaskContext'


const TaskCard = ({t}) => {

  const {deleteTask} = useContext(TaskContext)

  return (
    <div className='bg-gray-800 text-white m-4 p-4 rounded-md'>
      <h1 className='text-xl font-bold capitalize'>{t.title}</h1>
      <p className='py-4 text-gray-300 text-sm'>{t.description}</p>
      <button onClick={() => deleteTask(t.id)} className='bg-red-700 rounded-md p-2 hover:bg-red-900'>Eliminar Tarea</button>
    </div>
  );
};

export default TaskCard;
