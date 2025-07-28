import Home from "./components/Home";
import Login from "./components/Login";
import MainLayout from "./components/MainLayout";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Signup from "./components/Signup";
import { Routes,Route } from "react-router-dom";
export const config = {
  endpoint: `https://job-backend-fh80.onrender.com/job`,
};
function App() {
  return (
   
   <Routes>
    <Route path="/" element={<Login/>} />
    <Route path="/signup" element={<Signup/>}/>
    <Route path="/dashboard" element={<MainLayout/>}/>
   </Routes>
  
  );
}

export default App;
