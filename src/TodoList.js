import React from "react";
const ToDoList = (props)=>{
    
    return(
    <>
    <div className="todo_style">

     <ol>
    
        <li> <i className="fa fa-times" aria-hidden="true" onClick={()=>{
         props.onSelect(props.id)

     }}/> {props.text}
    </li>
     </ol>
        
    </div>
    
    </>
    );
// git hello
}
export default ToDoList 