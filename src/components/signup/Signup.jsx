import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./SignUp.scss";
import {Link} from "react-router-dom";

const SignUp = () => {
    const initialValues = {
        fullName: "",
        email: "",
        password: "",
        confirmPassword: "", // Add confirm password field
    };

    const validationSchema = Yup.object().shape({
        fullName: Yup.string().required("Full name is required"),
        email: Yup.string().email("Invalid email address").required("Email is required"),
        password: Yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
        confirmPassword: Yup.string()
            .oneOf([Yup.ref("password"), null], "Passwords must match") // Validate against the password field
            .required("Confirm password is required"),
    });

    const handleSubmit = (values) => {
        // Handle form submission here
        console.log(values);
    };

    return (
        <div className="signup-container">
            <div className="signup-image">
                <img
                    src="https://images.pexels.com/photos/5231137/pexels-photo-5231137.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt="Signup"
                />
            </div>
            <div className="signup-form">
                <h2>Sign Up</h2>
                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}
                >
                    <Form>
                        <div className="form-group">
                            <label htmlFor="fullName">Full Name</label>
                            <Field type="text" id="fullName" name="fullName" />
                            <ErrorMessage name="fullName" component="div" className="error" />
                        </div>

                        <div className="form-group">
                            <label htmlFor="email">Email Address</label>
                            <Field type="email" id="email" name="email" />
                            <ErrorMessage name="email" component="div" className="error" />
                        </div>

                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <Field type="password" id="password" name="password" />
                            <ErrorMessage name="password" component="div" className="error" />
                        </div>

                        <div className="form-group">
                            <label htmlFor="confirmPassword">Confirm Password</label>
                            <Field type="password" id="confirmPassword" name="confirmPassword" />
                            <ErrorMessage name="confirmPassword" component="div" className="error" />
                        </div>

                        <button type="submit"><Link to='/dash' style={{ textDecoration: "none",color:"white" }}>Sign Up</Link></button>
                    </Form>
                </Formik>

                <p className="signin-text">
                    Have an account? <Link to="/signin">Sign in</Link>
                </p>            </div>
        </div>
    );
};

export default SignUp;
