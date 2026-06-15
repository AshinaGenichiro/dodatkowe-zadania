import { useState } from 'react'
import ProductList from './components/task16/ProductList'
import FormToDo from './components/task16/FormToDo'
import ListaToDo from './components/task16/ListaToDo'
import StanToDo from './components/task16/StanToDo'
import PodswietlanyPrzycisk from './components/task17/PodswietlanyPrzycisk'
import './App.css'

/*
nazwa funkcji:Task16part1
opis funkcji: funkcja sprawdza co użytkownik wpisał w input, potem sprawdza czy jego input zgadza się z listą produktów(everyProduct)
parametry: brak
zwracany typ i opis : zwraca label z inputem oraz komponent ProductList
autor kacper
*/
function Task16Part1(){
  const [product, setProduct] = useState("")
  const everyProduct = ["laptop", "myszka", "klawiatura", "monitor"]

  const filteredProducts = everyProduct.filter((item) =>
  item.toLowerCase().includes(product.toLowerCase())
)
{
  return (
    <>
    <label htmlFor="search">Filtruj: </label>
    <input type="text" id="search" value={product} onChange={(e) => setProduct(e.target.value)} />
    <ProductList products={filteredProducts}/>  
    </>
  );
}
}
/*
Nazwa funkcji:Task16Part2
opis funkcji: funkcja łączy w sobie komponenty dzieki temu maja dostep do usestate tasks
parametry : brak
zwracany typ: zwraca 3 komponenty formularz,liste, oraz ilosc komponentów wykonanych
autor:kacper
*/
 function Task16Part2()
 {
  const[tasks,setTask] = useState([])
  /*
  nazwa funkcji : onToggleTask
  opis funkcji : funkcja tworzy kopie tablicy task, uzytkownik moze kliknąć czy zadanie zostało wywołane i potem wysyła tą kopie do orginalnej tablicy w usestate  
  parametr: taskID - id tasku który został wykonany
  zwracany typ i opis : brak
  autor : kacper
  */
  function onToggleTask(taskID)
  {
    const tasksCopy = tasks.map((task) => task.id === taskID ? {...task, finished: !task.finished} : task )
    setTask(tasksCopy)
  }
    /*
  nazwa funkcji : onAddTask
  opis funkcji : funkcja dodaje zadanie do listy pobiera ona te informacji z komponentu FormToDo, 
  parametr: taskName - nazwa zadania
  zwracany typ i opis : brak
  autor : kacper
  */
  function onAddTask(taskName)
  {
    const newTask = {
    id: crypto.randomUUID(),
    name: taskName,
    finished: false,
    }
    setTask([...tasks,newTask])
  }
  return(
  <>
  <FormToDo onAddTask={onAddTask}/>
  <ListaToDo tasks={tasks} onToggleTask={onToggleTask}/>
  <StanToDo tasks={tasks}/>
  
  </>
  )
 }
function Task17Part1()
{
  const[showButton,setShowButton] = useState(true);
  const[clicks,setClicks] = useState(0);
  return ( <>

  <button onClick={() => setShowButton(!showButton)}>{showButton ? "ukryj przycisk " : "pokaż przycisk"}</button>
  {showButton && <PodswietlanyPrzycisk clicks={clicks} onClick={() =>setClicks(clicks + 1)}/>}
  </>);

}
function App() {


  return (
    <>
    <h2>Moduł 16</h2>
    <Task16Part1/>
    <Task16Part2/>
    <h2>Moduł 17</h2>
    <Task17Part1/>
    </>
  )
}

export default App
