import './footer.css';

function TodoFooter({todos, onClearCompleted}) {
   const completedSize = todos.filter((todo)=>todo.comleted).length;
    return(
        <div className="footerChild">
            <span>{completedSize}/{todos.length}Completed</span>
            <button onClick={onClearCompleted}>Clear Completed</button>

       </div>
    )
   
}
export default TodoFooter