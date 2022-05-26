import React, { useState } from "react";
import ToDoList from "./TodoList";
const App =()=>{
  const [inputList,SetInputList]=useState("")
  const [Items,setItems]= useState([])
  const itemEvent = (event)=>
  {
    SetInputList(event.target.value)
  }
  const ListofItems = ()=>{
    setItems((oldItems)=>[...oldItems,inputList])
    SetInputList("")
  }
  const deleteItem =(id)=>{

    setItems((oldItems)=>{
      return oldItems.filter((arrElem,index)=>{
        return index !== id;
      })
    })


   }
  return(
    <>
    <div className="Main_div">
      <div className="Center_div">
        <br/>
        <h1>Todo List</h1>
        <br/>
        <input type="text" placeholder="Add a Items" value={inputList} onChange={itemEvent}/>
        <button onClick={ListofItems}>+</button>
        <ol>
        {/* <li>{inputList}</li> */}
        {Items.map((Itemsval,index)=>{
         return <ToDoList
         key={index}
         id={index}
         text={Itemsval}
         onSelect={deleteItem}/>
        })}


        </ol>
      </div>
    </div>

    </>
  )
  
}
export default App