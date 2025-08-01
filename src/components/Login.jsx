import React, { useState } from "react";
import "./Login.css";
import { useNavigate,Link } from "react-router-dom";
import axios from 'axios'
import { useSnackbar } from "notistack";
import loginImage from "../assets/signup.png"; // replace with your man image path
import { config } from "../App";
const Login = () => {
    const { enqueueSnackbar } = useSnackbar();
    const navigate=useNavigate();
    const [formData,setFormData]=useState({
        email:"",
        password:""
    })

    /* for the vaidate the input field */
    const validateInput = (data) => {
    if(data.username==="")
    {
     enqueueSnackbar("Username is a required field",{variant:"error"})
     return false;
    }
     else if(data.password==="")
     {
       enqueueSnackbar("Password is a required field",{variant:"error"});
     return false;
   }
   return true;
  };

  // pass the form data to the backend
const login=async(formData)=>{
    if(!validateInput(formData)){   // for the validation 
          return;
          }
        try {
           let response =await axios.post(`${config.endpoint}/auth/login`, {
            email: formData.email,
            password: formData.password,
          });
          setFormData({
            email: "",
            password: "",
          });
         // console.log(response);
         console.log(response.data);
         const name = response.data.user.name;
         const email = response.data.user.email;
        //  console.log(name);
        //  console.log(email);
        enqueueSnackbar("Logged in successfully", { variant: "success" });
        navigate("/dashboard",{state:{name,email}});
       
          
        } catch (e) {
         // setIsLoading(false);
          if ( e.response.status === 404) {
            return enqueueSnackbar(e.response.data.message, { variant: "error" });
          } 
          else if(e.response===401){
                return enqueueSnackbar(e.response.data.message, { variant: "error" });
          }
          else {
            enqueueSnackbar(
              "Something went wrong. check that the backend is running, reachable and return valid JSON.",
              { variant: "error" }
            );
          }
        }

}

const handleFormInput = (e) => {
    const [key, value] = [e.target.name, e.target.value];
    setFormData({ ...formData, [key]: value });
  };
  const handleFormSubmit=(e)=>{
    e.preventDefault();
    console.log(formData);
    login(formData);
  }
  return (
    <div className="login-container">
   
      <div className="login-left">
        <h2 className="login-title">Welcome to the Nottingham Building Society</h2>
        <p className="login-subtitle">If you already have an account, please sign in below.</p>

        <div className="role-toggle">
          <button disable>Admin</button>
          <button className="active" >Student</button>
        </div>

        <form className="login-form" onSubmit={handleFormSubmit}>
          <div className="form-group">
            <label>Email</label>
            <input type="email" placeholder="Enter your email" name="email" value={formData.email} onChange={handleFormInput}/>
          </div>

          <div className="form-group">
            <label>Password</label>
            <input type="password" placeholder="Enter your password" name="password" value={formData.password} onChange={handleFormInput}/>
          </div>

          <div className="remember-forgot">
            <label>
              <input type="checkbox" /> Remember me
            </label>
            <Link to="/resetPassword">Forget Password</Link>
          </div>

          <button type="submit" className="login-btn">Login</button>
        </form>

        <div className="bottom-buttons">
          <button className="signup-btn" onClick={()=>navigate('/signup')}>Sign Up</button>
        </div>
      </div>

      
      <div className="login-right">
        <img src={loginImage} alt="Login Visual" />
      </div>
    </div>
  );
};

export default Login;
