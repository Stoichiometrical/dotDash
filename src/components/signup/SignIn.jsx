import React from "react";
import { Link } from "react-router-dom";
import "./signin.scss";

const SignIn = () => {
    return (
        <div className="signin-container">
            <div className="signin-image">
                <img
                    src="https://images.pexels.com/photos/2835599/pexels-photo-2835599.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt="Sign In"
                />
            </div>
            <div className="signin-form">
                <h2>Sign In</h2>
                <form>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" name="password" />
                    </div>

                    <button type="submit"><Link to='/dash' style={{ textDecoration: "none",color:"white" }}>Sign In</Link></button>
                </form>

                <p className="signup-text">
                    Don't have an account? <Link to="/signup">Sign up</Link>
                </p>
            </div>
        </div>
    );
};

export default SignIn;
