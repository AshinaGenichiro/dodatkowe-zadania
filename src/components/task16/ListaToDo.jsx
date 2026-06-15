/*
*******************************************************
Nazwa Funkcji: ListaToDo
Opis Funkcji: Funckja pobiera parametr tasks(tablica obiektów w useState) i onToggleTask (funkcja, która ustawia właściwosc finished na true/false) i wypisuje zadania z todolisy oraz czy sa skonczone czy nie 
parametry: tasks - tablica obietków przechowywana w useState 
onToogleTask - funkcja wywoływana na onclicku
zwracany typ i opis: funckja wypsiuje zadania o ile występują
autor:kacper
*******************************************************
*/

function ListaToDo({ tasks, onToggleTask }) {

return (
    <>
    <h3>ZADANIA:</h3>
        {tasks.length === 0 ? (<p>Brak zadań.</p>) :
      (
    <ul>
        {tasks.map((task) => (
        <li key={task.id}>{task.name} <button onClick={() => onToggleTask(task.id)}>{task.finished ? "Oznacz jako niezrobione" : "oznacz jako wykonane"}</button> </li>))}
    </ul>
      )}
    </>

);
}
export default ListaToDo