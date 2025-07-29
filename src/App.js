
import Login from "./components/Login";
import MainLayout from "./components/MainLayout";
import ResetPassword from "./components/ResetPassword";
import Signup from "./components/Signup";
import { Routes,Route } from "react-router-dom";  // for the SPA (SINGLE PAGE APPLICATION )
export const config = {
  endpoint: `https://job-backend-fh80.onrender.com/job`,  // backend URL 
};
function App() {
  return (
   
   <Routes>
    <Route path="/" element={<Login/>} />
    <Route path="/signup" element={<Signup/>}/>
    <Route path="/dashboard" element={<MainLayout/>}/>
    <Route path="/resetPassword" element={<ResetPassword/>}/>
   </Routes>
  
  );
}

export default App;
