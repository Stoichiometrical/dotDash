import React, { useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import "./signin.scss";
import { useAuth } from '../../utils/AuthContext'

const SignIn = () => {
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useNavigate();

  const handleSignIn = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:8800/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const userData = await response.json();
        login(userData);
        console.log(userData);
        history("/dash");
      } else {
        console.error("Sign in failed");
      }
    } catch (error) {
      console.error("Error during sign in", error);
    }
  };

  return (
    <div className="signin-container">
      <div className="signin-image">
        <img
          src="https://images.pexels.com/photos/2835599/pexels-photo-2835599.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="Sign In"
        />
      </div>
      <div className="signin-form">
        <h1 style={{ textAlign: "center", marginBottom: "2%" }}>
          Welcome Back to dotTerra!!
        </h1>
        <h2>Sign In</h2>
        <form onSubmit={handleSignIn}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" onSubmit={handleSignIn}>Sign In</button>
        </form>
        <p className="signup-text">
          Don't have an account? <Link to="/signup">Sign up</Link>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
