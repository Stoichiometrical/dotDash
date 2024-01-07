import React, { useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import "./signin.scss";
import { useAuth } from '../../utils/AuthContext'

const SignIn = () => {
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useNavigate();
  const[loading,setLoading] = useState(false)

  const handleSignIn = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://dot-backend.onrender.com/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      setLoading(true)

      if (response.ok) {
        setLoading(false)
        const userData = await response.json();
        login(userData);
        console.log(userData);
        history("/dash");
      } else {

        alert("Sign in failed.Please enter the correct details")

        console.error("Sign in failed");
      }
    } catch (error) {
      console.error("Error during sign in", error);
    }finally {
      setLoading(false)
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
          Welcome Back to dotTerra
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
          {
            loading && (<div className="loader">
                Loading...
            <img src="https://technometrics.net/wp-content/uploads/2020/11/loading-icon-animated-gif-19-1.gif" style={{width:"100%",height:"30px"}}  alt="Missing"/>

            </div>)
          }
        </form>
        <p className="signup-text">
          Don't have an account? <Link to="/signup">Sign up</Link>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
