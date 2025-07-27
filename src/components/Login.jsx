import React from "react";
import "./Login.css";
import loginImage from "../assets/signup.png"; // replace with your man image path

const Login = () => {
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

        <form className="login-form">
          <div className="form-group">
            <label>Email</label>
            <input type="email" placeholder="Enter your email" />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input type="password" placeholder="Enter your password" />
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
