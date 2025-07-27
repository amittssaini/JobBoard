import React, { useState } from 'react'
import SignupImage from "../assets/signup.png"
import './Signup.css'
const Signup = () => {
    const [singupData,setSignupData]=useState({
        firstName:"",
        lastName:"",
        email:"",
        password:"",
        rePassword:""

    })
    const handleFormInput=(e)=>{
        const {name,value} = e.target;
        setSignupData((prev)=>({...prev,[name]:value}));
    }
    const handleFormSubmit=(e)=>{
        e.prevent.default();
    }
  return (
    <div className="signup-container">
      <div className="signup-left">
        <img src={SignupImage} alt="Signup Visual" />
      </div>

      <div className="signup-right">
        <h2>Sign Up</h2>
        <form className="signup-form" onSubmit={handleFormSubmit}>
          <div className="input-row">
            <div className="form-group">
              <label>First Name</label>
              <input type="text" placeholder="Enter first name" name='firstName' value={singupData.firstName} onChange={handleFormInput}/>
            </div>
            <div className="form-group">
              <label>Last Name</label>
              <input type="text" placeholder="Enter last name" name='lastName' value={singupData.lastName} onChange={handleFormInput} />
            </div>
          </div>

          <div className="form-group">
            <label>Email</label>
            <input type="email" placeholder="Enter email" name='email' value={singupData.email} onChange={handleFormInput} />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input type="password" placeholder="Enter password" name='password' value={singupData.password} onChange={handleFormInput} />
          </div>

          <div className="form-group">
            <label>Re-enter Password</label>
            <input type="password" placeholder="Re-enter password" value={singupData.rePassword} onChange={handleFormInput} />
          </div>

          <div className="remember-forgot">
            <label>
              <input type="checkbox" /> Remember me
            </label>
            <a href="#">Forgot Password?</a>
          </div>

          <button className="register-btn" type='submit'>Register</button>
        </form>

        <div className="or-section">OR</div>

        <div className="social-buttons">
          <button className="google-btn">Sign-Up with Google</button>
          <button className="facebook-btn">Sign with Facebook</button>
        </div>
      </div>
    </div>
  );
};
export default Signup