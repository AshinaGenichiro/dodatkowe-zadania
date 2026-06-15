/*
Nazwa funkcji: FormToDo
Opis funkcji: Funkcja przesyła formularz który przez to ze przyjmuje funkcje jako parametr to w app.js dodaje ja do tablicy obietkow 
parametry : onAddTask - funkcja przesyłająca zadanie do ToDoListy
zwracany typ i opis: funkcja zwraca formularz który opbsługuje wpisywanie rzeczy do listy
*/

import { useState } from "react";
function FormToDo({onAddTask})
{
    const[inputValue, setInputValue] = useState("");
    const[isTaskCorrect,setIsTaskCorrect] = useState(true);
    const handleSubmit = (e) =>
    {
        e.preventDefault()
        if(!inputValue.trim())
        {
            setIsTaskCorrect(false);
        }else 
        {
            onAddTask(inputValue)
            setInputValue("")
            setIsTaskCorrect(true)
        }
    }
    return (
    <>
    <form onSubmit={handleSubmit}>
        <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
        <button type="submit">Dodaj Zadanie</button>
        {!isTaskCorrect && <p style = {{color:"red"}}>Nie mozna dodać pustego zadania </p>}
    </form>
   
    </>);
}
export default FormToDo