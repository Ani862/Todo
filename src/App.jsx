import { useState } from 'react';
import './App.css';
import TodoList from './TodoList';
import TodoHeader from './TodoHeader';
import TodoFooter from './TodoFooter';

function App() {
  const [todos, setTodos] = useState([
    {id: 1, text:"Java Script", completed: false },
    {id: 2, text:"React", completed: false },
    {id: 3, text:"Html", completed: false },
    {id: 4, text:"Css", completed: false },
    {id: 5, text:"Next", completed: false },
  ])
  return(
    <div className="App">
      <div className="AppCont">
        <TodoHeader onAdd={(text)=>{
          setTodos([
            ...todos,
            {
              id:6,
              text:text,
              completed:false
            }
          ])
        }}/>
        <TodoList
         todos ={todos}
         onDelete={(todo)=>{
          setTodos(todos.filter((t) => t.id !== todo.id));
        }}
        onChange={(newTodo) => {
          setTodos(todos.map((todo)=>{
            if(todo.id === newTodo.id){
              return newTodo;
            }
            return todo;
          }))

        }}
        />
        <TodoFooter todos={todos} onClearCompleted ={()=>{
         setTodos(todos.filter((todo)=>!todo.completed))
        }} />
      </div>
    </div>
  )
}

export default App
