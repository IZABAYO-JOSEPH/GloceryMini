import { useState } from 'react'
import Form from "./form"
import { nanoid } from 'nanoid'
import Items from './items'
import { ToastContainer,toast } from 'react-toastify'
const getLocalStorage = () =>{
  // do we Actually have something
let list = localStorage.getItem('list')
if(list){
  list = JSON.parse(localStorage.getItem('list'))
}else{
  list = []
}
return list
}
// oneliner code of the above function the functionality still the same
const defaultlist = JSON.parse(localStorage.getItem('list'))
const setLocalStorage=(items)=>{
localStorage.setItem('list',JSON.stringify(items))
}
function App() {
  const [items, setItems] = useState(getLocalStorage())
  const addItem = (itemName) =>{
   const newItem = {
    name: itemName,
    completed: false,
    id: nanoid()
   } 
   const newItems = [...items,newItem]
   setItems(newItems)
   setLocalStorage(newItems)
   toast.success('item added to the list')
  }
  const removeItem = (itemId) =>{
   const newItem = items.filter((item)=>item.id !== itemId)
   setItems(newItem)
   setLocalStorage(newItem)
   toast.success('item deleted')
  }
  const editItem = (itemId) =>{
    const newItems = items.map((item)=>{
   if(item.id === itemId){
    const newItem = {...item,completed:!item.completed}
    return newItem 
  }
   return item
    })
   setItems(newItems)
   setLocalStorage(newItems)
  }
  return (
   <div className="section-center">
    <ToastContainer position='top-center' />
    <Form addItems= {addItem} />
    <Items items={items} removeItem ={removeItem} editItem = {editItem} />
   </div>
  )
}

export default App
