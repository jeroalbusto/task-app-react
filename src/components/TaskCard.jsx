
const TaskCard = ({t, deleteTask}) => {

  return (
    <div>
      <h1>{t.title}</h1>
      <p>{t.description}</p>
      <button onClick={() => deleteTask(t.id)}>Eliminar Tarea</button>
    </div>
  );
};

export default TaskCard;
