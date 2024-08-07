import TodoListItem from "../TodoListItem"

function TodoList({todos, onChange, onDelete}) {
    return(
        <div>
          {todos.map((todo)=>{
            return(
                <TodoListItem key={todo.id} todo={todo} onChange={onChange} onDelete={onDelete}/>
            )
          })}
        </div>
    )
    
}
export default TodoList