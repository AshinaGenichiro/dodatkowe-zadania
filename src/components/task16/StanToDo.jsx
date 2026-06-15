/*
*******************************************************
Nazwa Funkcji: StanToDo
Opis Funkcji: Funckja wypisuje ukończone oraz nieukończone
parametry: tasks - tablica obietków przechowywana w useState 
zwracany typ i opis: funkcja wypisuje zadania ukończone i nieukończone
autor:kacper
*******************************************************
*/

function StanToDo({ tasks }) {
const finishedTasks = tasks.filter((task) => task.finished === true).length;
const unFinishedTasks = tasks.filter((task) => task.finished === false).length;
return (
    <>
    <h4>Liczba zadań</h4>
    <p>Ukończone zadania : {finishedTasks}</p>
    <p>Zadania nieukończone : {unFinishedTasks}</p>

    </>

);
}
export default StanToDo