"use client"

import InputFields from "./components/InputFields";
import "./globals.css";
import { useState } from "react";


const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");

  console.log(todo)

  return (
    <div className="w-lvw h-lvh flex flex-col items-center bg-blue-300">
      <span className="font-serif uppercase text-4xl mt-8 text-black z-10 text-center mb-3" >to-do-list</span>
      <InputFields todo={todo} setTodo={setTodo}/>
    </div>
  );
}

export default App;
