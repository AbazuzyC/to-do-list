import React from "react";
interface Props{
  todo:string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;


}

const InputFields: React.FC<Props> = ({todo, setTodo}) => {
  return (
    <form className="flex w-[95%] items-center relative">
      <input
        type="text"
        placeholder="Type what you wanna type"
        className="w-full rounded-full p-5 text-xl border-none transition duration-200 shadow-inner 
        focus:shadow-[0_0_10px_1000px_rgba(0,0,0,0.1)] focus:outline-none"
        value={todo}
        onChange={
          (e)=>setTodo(e.target.value)
        }
      />
      <button
        className="absolute w-[50px] h-[50px] m-3 rounded-full right-0 border-none 
        text-sm bg-[#2f74c0] text-white transition duration-200 shadow-[0_0_10px_black]"
        type="submit"
      >
        Go
      </button>
    </form>
  );
};

export default InputFields;
