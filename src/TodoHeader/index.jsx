import { useState } from 'react';
import './header.css';


function TodoHeader({onAdd}) {
    const [text, setText] =useState("")
    return(
        <form className="headerCont" onSubmit={(e) =>{
            e.preventDefault()
            onAdd(text)   
            setText("")        
        }} >
            <input type="text" value={text} onChange={(e)=>{
            setText(e.target.value)
        }}/>
            <button>Add</button>
        </form>
    )
    
}
export default TodoHeader