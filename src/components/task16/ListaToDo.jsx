function ListaToDo({ tasks, onToggleTask }) {

return (
    <>
    <h3>Wyniki wyszukiwania:</h3>
        {tasks.length === 0 ? (<p>Brak zadań.</p>) :
      (
    <ul>
        {tasks.map((task) => (
        <li key={task.id}>{task.name} <button disabled={task.finished} onClick={() => onToggleTask(task.id)}>Już wykonano</button> </li>))}
    </ul>
      )}
    </>

);
}
export default ListaToDo