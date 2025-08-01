import React, { useState } from 'react'
import SignupImage from "../assets/signup.png"
import './Signup.css'
import { enqueueSnackbar } from 'notistack';
import { config } from '../App';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
const Signup = () => {
    const [formData,setFormData]=useState({
        firstName:"",
        lastName:"",
        email:"",
        password:"",
        confirmPassword:""
   })
   
   const navigate = useNavigate();


const validateInput = (data) => {
    console.log("in the validate function ")
    if(data.firstName==="")
   {
    enqueueSnackbar("First Name is a required field",{variant:"error"})
    return false;
   }
   else if(data.lastName==="")
   {
    enqueueSnackbar("Last Name is a required field",{variant:"error"})
    return false;
   }
   
    else if(data.email==="")
    {
      enqueueSnackbar("email is a required field",{variant:"error"});
    return false;
  }
    else if(data.password==="")
    {
      enqueueSnackbar("Password is a required field",{variant:"error"});
    return false;
  }
    else if(data.password.length<5)
    {
      enqueueSnackbar("Password must be at least 5 characters",{variant:"error"});
      return false;
    }
    else if(data.password!==data.confirmPassword)
   {
    enqueueSnackbar( "Password do not match",{variant:"error"});
    return false;
   }
     return true;
  };




    const register = async(formData) => {  
    console.log("in the register function ")
        if(!validateInput(formData)){ // to validate or checkpoint the user input 
          return;
          }
        console.log("heyy its true");
        try {
  
          await axios.post(`${config.endpoint}/auth/register`, {
            firstName: formData.firstName,
            lastName:formData.lastName,
            email:formData.email,  
            password: formData.password,
          });
        console.log(formData);
          setFormData({
            firstName: "",
            lastName:"",
            email:"",
            password: "",
            confirmPassword: "",
          });
          enqueueSnackbar("Registed successfully", { variant: "success" });
 
          navigate("/",{replace:true});
        } catch (e) {

          if (e.response && e.response.status === 400) {
            return enqueueSnackbar(e.response.data.message, { variant: "error" });
          } else {
            enqueueSnackbar(
              "Something went wrong. check that the backend is running, reachable and return valid JSON.",
              { variant: "error" }
            );
          }
        }
      };
    const handleFormInput=(e)=>{
    const [key, value] = [e.target.name, e.target.value]; 
        setFormData((prev)=>({...prev,[key]:value}));
    }
    const handleFormSubmit=(e)=>{
        e.preventDefault();
        console.log("hello wold");
        console.log(formData);
        register(formData);
    }
  return (
    <div className="signup-container">
      <div className="signup-left">
        <img src={SignupImage} alt="Signup Visual" />
      </div>

      <div className="signup-right">
        <h2>Sign Up</h2>
        <form className="signup-form" onSubmit={handleFormSubmit} >
          <div className="input-row">
            <div className="form-group">
              <label>First Name</label>
              <input type="text" placeholder="Enter first name" name='firstName' value={formData.firstName} onChange={handleFormInput}/>
            </div>
            <div className="form-group">
              <label>Last Name</label>
              <input type="text" placeholder="Enter last name" name='lastName' value={formData.lastName} onChange={handleFormInput} />
            </div>
          </div>

          <div className="form-group">
            <label>Email</label>
            <input type="email" placeholder="Enter email" name='email' value={formData.email} onChange={handleFormInput} />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input type="password" placeholder="Enter password" name='password' value={formData.password} onChange={handleFormInput} />
          </div>

          <div className="form-group">
            <label>Re-enter Password</label>
            <input type="password" placeholder="Re-enter password" name='confirmPassword' value={formData.confirmPassword} onChange={handleFormInput} />
          </div>

          <div className="remember-forgot">
            <label>
              <input type="checkbox" /> Remember me
            </label>
           
          </div>

          <button className="register-btn" type='submit'  >Register</button>
        </form>

        <div className="or-section">OR</div>

        <div className="social-buttons">
          <button className="google-btn" disabled>Sign-Up with Google</button>
          <button className="facebook-btn" disabled>Sign with Facebook</button>
        </div>
      </div>
    </div>
  );
};
export default Signup