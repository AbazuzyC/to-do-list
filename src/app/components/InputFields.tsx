import React from "react"

const InputFields = () => {
  return (
    <form className="flex w-[95%] items-center relative">
      <input
        type="text"
        placeholder="Type what you wanna type"
        className="w-full rounded-full p-5 text-xl border-none transition duration-200 shadow-inner 
        focus:shadow-[0_0_10px_1000px_rgba(0,0,0,0.1)] focus:outline-none"
      />
      <button className="border" type="submit">Go</button>
    </form>
  );
};



export default InputFields
