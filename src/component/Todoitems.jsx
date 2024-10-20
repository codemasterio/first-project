import './css/TodoItems.css'
import nptselected from './Assets/nptselected.png'
import righttick from "./Assets/righttick.png";
import wrongtick from "./Assets/wrongtick.png";
import Todo from './Todo';

const TodoItems = ({no,display,text,settodo}) => {

  const deleteTodo=()=>{
    let data=JSON.parse(localStorage.getItem("Todos"));
    data= data.filter((Todo)=> Todo.no!==no);
    settodo(data);
  }

  const toggle =(no)=>{
    let data=JSON.parse(localStorage.getItem("Todos"));
    for(let i=0;i<=data.length;i++){
      if(data[i].no===no){
        if(data[i].display===""){
          data[i].display="linet-hrough";
        }
        else{
          data[i].display="";
        }
        break;
      }
    }
    settodo(data);
  }
  return (  
    <div className='todoitems'>
        <div className={`todoitems-container ${display}`} onClick={()=>{toggle(no)}}>
          {display===""?<img src={nptselected} alt="" style={{ width: '40px', height: '40px' }} />:<img src={righttick} alt="" style={{ width: '40px', height: '40px' }} />}
          
          <div className="todoitems-text">{text}</div>
        </div>
        <img className='todo-wrong-icon' onClick={()=>{deleteTodo(no)}} src={wrongtick} alt="" style={{ width: '40px', height: '40px' }} />
      
    </div>
  )
}

export default TodoItems
