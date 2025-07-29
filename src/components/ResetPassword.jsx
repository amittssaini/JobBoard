import React, { useState } from "react";
import "./ResetPassword.css";
import { enqueueSnackbar } from "notistack";
import axios from "axios";
import { config } from "../App";
import { useNavigate } from "react-router-dom";

const ResetPassword = () => {
    const [formData,setFormData]=useState({
        email:"",
        password:"",
        confirmPassword:""
    })
    const navigate = useNavigate();
 const validateInput = (data) => {
    // console.log("in the validate ",data);
    if(data.email==="")
    {
     enqueueSnackbar("Email is a required field",{variant:"error"})
     return false;
    }
    
     else if(data.password==="")
     {
       enqueueSnackbar("Password is a required field",{variant:"error"});
     return false;
    }
    else if(data.password.length<5)
     {
       enqueueSnackbar("Password should be atleast 5 character ",{variant:"error"});
     return false;
    }
    else if(data.confirmPassword==="")
    {
     enqueueSnackbar("Confirm Password  is a required field",{variant:"error"})
     return false;
    }
    else if(data.password!==data.confirmPassword)
    {
        enqueueSnackbar("Password and Confirm Password Should match",{variant:"error"});
        return false;
    }
   return true;
  };
    const postResetPassword=async(data)=>{
        console.log(data);
        if(!validateInput(data)) { return} ;
        try {
            let response =await axios.post(`${config.endpoint}/auth/forgetPassword`, {
            email: data.email,
            password: data.password,
          });
          console.log("hello");
          console.log(response);
          setFormData({
            email:"",
            password:"",
            confirmPassword:""
          });
           console.log(response);
           console.log(response.status);
           if(response.status==200)
           {
            enqueueSnackbar(response.data.message,{variant:"success"})
            navigate('/');
           }
        } catch (error) {
           if(error.status==404){
            enqueueSnackbar("User not Found",{variant:"error"})
           }
           else{
            enqueueSnackbar("Something is Wrong ",{variant:"error"})
           }
           setFormData({
            email:"",
            password:"",
            confirmPassword:""
          });
        }
    }
    const handleFormInput=(e)=>{
    const [key, value] = [e.target.name, e.target.value];
    setFormData({ ...formData, [key]: value });
    }
    const handleFormSubmit=(e)=>{
        e.preventDefault();
        console.log(formData);
        postResetPassword(formData);
    }
  return (
    <div className="reset-wrapper">
      <div className="reset-card">
        <h2 className="reset-title">Reset Your Password</h2>
        <p className="reset-subtitle">Enter your email and new password to continue.</p>

        <form className="reset-form" onSubmit={handleFormSubmit}>
         
          <div className="form-group">
            <label htmlFor="email" className="form-label">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              className="form-input"
              name="email"
              value={formData.email}
              onChange={handleFormInput}
            />
          </div>

         
          <div className="form-group">
            <label htmlFor="password" className="form-label">New Password</label>
            <input
              type="password"
              id="password"
              placeholder="Enter new password"
              className="form-input"
              name="password"
              value={formData.password}
              onChange={handleFormInput}
            />
          </div>

          {/* Confirm Password */}
          <div className="form-group">
            <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              placeholder="Confirm new password"
              className="form-input"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleFormInput}
            />
          </div>

          <button type="submit" className="reset-button" o>Reset Password</button>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;
