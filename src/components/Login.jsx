import React, { useState } from "react";
import "./Login.css";
import { useSnackbar } from "notistack";
import loginImage from "../assets/signup.png"; // replace with your man image path

const Login = () => {
    const { enqueueSnackbar } = useSnackbar();
    const [formData,setFormData]=useState({
        email:"",
        password:""
    })
    const validateInput = (data) => {

    if(data.username==="")
    {
     enqueueSnackbar("Username is a required field")
     return false;
    }
    
     
     else if(data.password==="")
     {
       enqueueSnackbar("Password is a required field");
     return false;
   }
   return true;
  };

const login=async(formData)=>{
    if(!validateInput(formData)){
          return;
          }
    
        try {
        //   setIsLoading(true);
        //    let response =await axios.post(`${config.endpoint}/auth/login`, {
        //     username: formData.username,
        //     password: formData.password,
        //   });
          setFormData({
            username: "",
            password: "",
          });
          
        // console.log(response.data);
        //  let userData = response.data
        // persistLogin(userData.token,userData.username,userData.balance);
    
          enqueueSnackbar("Logged in successfully", { variant: "success" });
        //   setIsLoading(false);
        //   history.push("/");
          
        } catch (e) {
         // setIsLoading(false);
          if (e.response && e.response.status === 400) {
            return enqueueSnackbar(e.response.data.message, { variant: "error" });
          } else {
            enqueueSnackbar(
              "Something went wrong. check that the backend is running, reachable and return valid JSON.",
              { variant: "error" }
            );
          }
        }

}
const persistLogin = (token, username, balance) => {
    localStorage.setItem('username',username);
    localStorage.setItem('token',token);
    localStorage.setItem('balance',balance);
  };
const handleFormInput = (e) => {
    const [key, value] = [e.target.name, e.target.value];
    setFormData({ ...formData, [key]: value });
  };
  const handleFormSubmit=(e)=>{
    e.preventDefault();
    console.log(formData);
    //login(formData);
  }
  return (
    <div className="login-container">
      {/* Form on the left */}
      <div className="login-left">
        <h2 className="login-title">Welcome to the Nottingham Building Society</h2>
        <p className="login-subtitle">If you already have an account, please sign in below.</p>

        <div className="role-toggle">
          <button className="active">Admin</button>
          <button>Student</button>
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
            <a href="#">Forgot Password?</a>
          </div>

          <button type="submit" className="login-btn">Login</button>
        </form>

        <div className="bottom-buttons">
          <button className="signup-btn">Sign Up</button>
        </div>
      </div>

      {/* Image on the right */}
      <div className="login-right">
        <img src={loginImage} alt="Login Visual" />
      </div>
    </div>
  );
};

export default Login;
