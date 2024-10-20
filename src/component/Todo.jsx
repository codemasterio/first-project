import { useEffect, useRef, useState } from 'react'
import './css/Todo.css'
import TodoItems from './Todoitems'

let count=0;
const Todo = () => {

    const[Todos,settodo]=useState([]);
    const inputref=useRef(null);

    const add=()=>{
        settodo([...Todos,{no:count++,text:inputref.current.value,display:""}]);
        inputref.current.value="";
        localStorage.setItem("Todos_count",count);
    }
    useEffect(()=>{
        settodo(JSON.parse(localStorage.getItem("Todos")));
        count= localStorage.getItem("Todos_count");
    },[])

    useEffect(()=>{
        setTimeout(()=>{
            console.log(Todos);
            localStorage.setItem("Todos",JSON.stringify(Todos));

        },100);
    },[Todos])

  return (
    <div className="Todo">
        <div className="todoheader">Todo-Header</div>
        <div className="todo-add">
            <input ref={inputref} type="text" placeholder='add your Task' className='Todoinput' />
            <div onClick={()=>{add()}} className="todoaddbutton">Add</div>
        </div>
        <div className="todolist">
            {Todos.map((item,index)=>{
                return <TodoItems key={index} settodo={settodo} no={item.no} display={item.display} text={item.text}/>
            })}
        </div>

      
    </div>
  )
}

export default Todo
