"use client"

import InputFields from "./components/InputFields";
import { Todo } from "./components/model";
import "./globals.css";
import { useState } from "react";


const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);
  
  const handleAdd = (e:React.FormEvent) => {
    e.preventDefault();

    if(todo){
      setTodos([...todos,{id:Date.now(),todo,isDone:false}])
      setTodo("");
    }
  };

  console.log(todos);


  return (
    <div className="w-lvw h-lvh flex flex-col items-center bg-blue-300">
      <span className="font-serif uppercase text-4xl mt-8 text-black z-10 text-center mb-3" >to-do-list</span>
      <InputFields todo={todo} setTodo={setTodo} handleAdd={handleAdd}/>
      {todos.map((t)=>(
        <li>{t.todo}</li>
      ))}
    </div>
  );
}

export default App;
