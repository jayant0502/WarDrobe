import React, { useState } from "react";
import { Button, TextField } from "@mui/material";
import "./Login.css";
import img from "../../assets/formImages/female_shopping_from_phone.jpg";
import img2 from "../../assets/formImages/Big_phone_with_cart.jpg";
import { useNavigate } from "react-router";
import axios from "axios";

const Register = () => {
  const [isSignUp, setIsSignUp] = useState(true);

  const navigate = useNavigate();

  const signUpInitialValues = {
    username: "",
    email: "",
    password: "",
  };

  const signInInitialValues = {
    email: "",
    password: "",
  };

  const toggleForm = () => {
    setIsSignUp((prev) => !prev);
  };

  const [signUpValues, setSignUpValues] = useState(signUpInitialValues);
  const [signInValues, setSignInValues] = useState(signInInitialValues);

  const [formErrors, setFormErrors] = useState({});
  const [SignInformErrors, setSignInFormErrors] = useState({});

  const handleSignUpSubmit = (e) => {
    e.preventDefault();
    const errors = validate(signUpValues);
    setFormErrors(errors);

    if (Object.keys(errors).length === 0) {
      registerUser(signUpValues);
    } else {
      alert("Please fill in all required fields.");
    }
  };

  const validate = (values) => {
    const errors = {};
    if (!values.username.trim()) {
      errors.username = "Username is required";
    }
    if (!values.email.trim()) {
      errors.email = "Email is required";
    }
    if (!values.password.trim()) {
      errors.password = "Password is required";
    }
    return errors;
  };

  const handleSignInSubmit = (e) => {
    e.preventDefault();
    const errors = validateSignIn(signInValues);
    setSignInFormErrors(errors);
   
    if (Object.keys(errors).length === 0) {
      loginUser(signInValues);
    } else {
      alert("Fill all the required fields")
    }
  };


  const validateSignIn = (values) => {
    const SignInErrors = {};

    if (!values.email.trim()) {
      SignInErrors.email = "Email is required";
    }
    if (!values.password.trim()) {
      SignInErrors.password = "Password is required";
    }
    return SignInErrors;
  };

  const registerUser = (formData) => {
    axios
      .post(`http://localhost:8000/user`, formData)
      .then((response) => {
        console.log("Success", response);
        alert("Registered");
        if (response.status === 200) {
          // Navigate to the home page if registered
          navigate("/");
        } else {
          alert("Registration failed");
        }
      })
      .catch((errors) => {
        console.log("error", errors);
        alert("Error during registration");
      });
  };
   const [matchingUser,setMatchingUser]=useState(false);
  const loginUser = (formData) => {

    axios
      .get("http://localhost:8000/user")
      .then((response) => {
        const users = response.data;
        console.log(response)
        
        users.find(
          (user) =>{
                    
           if(user.email === formData.email && user.password === formData.password){
             sessionStorage.setItem("id",user.id)
             sessionStorage.setItem("userName",user.username)
            sessionStorage.setItem("email",user.email)
            setMatchingUser(true)
           }
          }
        );
            console.log(matchingUser)
        if (matchingUser) {
          navigate("/");
         
        } 
        else {         
          alert("Invalid email or password. Please try again.");
        }
      })
      .catch((error) => {
        console.error("Error while fetching user data:", error);
        alert("Error during sign-in");
      });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (isSignUp) {
      setSignUpValues({ ...signUpValues, [name]: value });
    } else {
      setSignInValues({ ...signInValues, [name]: value });
    }
  };

  return (
    <div className="wrapper">
      <div className={`form-container ${isSignUp ? "sign-up" : "sign-in"}`}>
        <div className="login-form">
          <h1>WELCOME!</h1>
          <h5>TO YOUR OWN WARDROBE</h5>
          {isSignUp ? (
            <form onSubmit={handleSignUpSubmit} method="post" className="form">
              <h1>Sign Up</h1>
              <TextField
                id="User Name"
                label="User Name"
                name="username"
                variant="standard"
                type="text"
                value={signUpValues.username}
                onChange={handleChange}
              />
              {formErrors.username && <p>{formErrors.username}</p>}
              <TextField
                id="email"
                label="Email"
                type="email"
                variant="standard"
                name="email"
                value={signUpValues.email}
                onChange={handleChange}
              />
              {formErrors.email && <p>{formErrors.email}</p>}
              <TextField
                id="password"
                label="Password"
                type="password"
                variant="standard"
                name="password"
                value={signUpValues.password}
                onChange={handleChange}
              />
              {formErrors.password && <p>{formErrors.password}</p>}
              <Button type="submit" id="form-btn">
                Sign Up
              </Button>
            </form>
          ) : (
            <form onSubmit={handleSignInSubmit} method="post" className="form">
              <h1>Sign In</h1>
              <TextField
                id="email"
                label="Email"
                type="email"
                variant="standard"
                value={signInValues.email}
                onChange={handleChange}
                name="email"
              />
              {SignInformErrors.email && <p>{SignInformErrors.email}</p>}
              <TextField
                id="password"
                label="Password"
                type="password"
                variant="standard"
                value={signInValues.password}
                onChange={handleChange}
                name="password"
              />
              {SignInformErrors.password && <p>{SignInformErrors.password}</p>}
              <Button type="submit" id="form-btn">
                Sign In
              </Button>
              {/* <p id="error"></p> */}
            </form>
          )}

          <a className="toggle-btn" onClick={toggleForm}>
            {isSignUp
              ? "Already have an account? Sign In"
              : "Don't have an account? Sign Up"}
          </a>
        </div>
      </div>
      <div className="img-container">
        {isSignUp ? (
          <img
            src={img2}
            alt="image of shop"
            className="form-img"
            id="full img"
          />
        ) : (
          <img src={img} alt="image of shopping" className="form-img" />
        )}
      </div>
    </div>
  );
};

export default Register;
