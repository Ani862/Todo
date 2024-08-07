import './listItem.css';

function TodoListItem({todo, onChange, onDelete}) { 
return(
    <div>
       <label className="label">
        <div>
           <input type="checkbox" checked={todo.completed} onChange={(e)=>{
                onChange({
                   ...todo,
                    completed: e.target.checked
                })
           }}/>
            {todo.text}
        </div>
            <button onClick={()=>{
                onDelete(todo)
            }}>X</button>
       </label>
    </div>
    )
}  
export default TodoListItem