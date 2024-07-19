import "./App.css";
import Dashboard from "./main/Dashboard";
import SideBar from "./main/SideBar";

function App() {
  return (
    <div className="w-full flex ">
      <div className=" md:w-[20%] lg:w-[15%] bg-[#1E293B] hidden sm:block pb-4 ">
        <SideBar />
      </div>
      <div className="w-full md:w-[80%] lg:w-[85%] h-full bg-[#e8f1fa] pb-4">
        <Dashboard />
      </div>
    </div>
  );
}

export default App;
