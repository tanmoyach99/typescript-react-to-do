import React,{FC,ChangeEvent,useState} from 'react';
import './App.css';
import ToDo from './components/ToDo';
import {ITask} from './interfaces';



const App: FC=()=> {


  const [task,setTask]=useState <string> ("");
  const [deadline,setDeadline]=useState <number> (0);
  const [toDo,setToDO]=useState<ITask[]>([]);


  const handleChange=(e: ChangeEvent<HTMLInputElement>):void=>{
    if(e.target.name==="task"){
      setTask(e.target.value);
    }else{

      if(deadline<0){
        alert ("wrong input")
      }
      setDeadline(Number(e.target.value));
    }
    
  }

  const addTask=():void=>{

    const newTask={
      taskName:task,
      deadline: deadline,
    }
    setToDO([...toDo,newTask])
    setTask('');
    setDeadline(0);

  }

  const completeTask=(taskName:string):void=>{
    setToDO(toDo.filter((task)=>{
      return task.taskName!==taskName

    }))



  }


  return (
    <div className="App">
      <header className="header">
       <div className="input-container">
         <input type="text" name="task" value={task} id="" placeholder="text" onChange={handleChange} />
      
       <input type="number" name="deadline" value={deadline} id="" placeholder="deadline" onChange={handleChange}/>
      
       
       </div>
       <button onClick={addTask}>Add task</button>
      </header>
      <div className="to-do-list">
        {toDo.map((task:ITask,key:number)=><ToDo key={key} task={task}  completeTask={completeTask}/>)}
        
      </div>
      
    </div>
  );
}

export default App;
