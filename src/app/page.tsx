import Image from "next/image";
import InputFields from "./components/InputFields";
import "./globals.css";

const App: React.FC = () => {
  return (
    <div className="w-lvw h-lvh flex flex-col items-center bg-blue-300">
      <span className="font-serif uppercase text-4xl mt-8 text-black z-10 text-center" >to-do-list</span>
      <InputFields />
    </div>
  );
}

export default App;
