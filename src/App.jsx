import { useState } from 'react'
import ProductList from './components/task16/ProductList'
import './App.css'

function App() {
  
  function Task16part1(){
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
 function Task16Part2()
 {
  const[tasks,setTask] = useState([{id:0,name:"", finished:false}])
  function onToggleTask(taskID)
  {
    const tasksCopy = tasks.map((task) => {task.id === taskID ? {...task, finished:true} : task })
  }
  
 }

  return (
    <>
    <Task16part1/>
    </>
  )
}

export default App
