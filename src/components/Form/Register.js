import React, { useState, useEffect } from "react";
import { Button, TextField } from "@mui/material";
import "./Login.css";
import img from "../../assets/female_shopping_from_phone.jpg";
import img2 from "../../assets/Big_phone_with_cart.jpg";
import { useNavigate } from "react-router";
import axios from "axios";


const Register = () => {
  const [isSignUp, setIsSignUp] = useState(true);
  // const [isSignIn, setIsSignIn] = useState(false);
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  const signUpInitialValues = {
    username: "",
    email: "",
    password: ""
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
  const [isSubmit, setIsSubmit] = useState(false);

  const registerUser = (formData) => {
    if (isSignUp) {
      if (formData.username && formData.email && formData.password) {
        // Registration logic
        axios
          .post(`http://localhost:3000/user`, formData)
          .then((response) => {
            console.log("Success", response);
            alert("Registered");
          })
          .catch((errors) => {
            console.log("error", errors);
            alert("Error during registration");
          });
      } else {
        alert("Fill all the data...");
      }
    } else {
      // Handle the code for sign-in here
      console.log("This is a sign-in form");
    }
  };
  
  useEffect(() => {
    // if(formData.email && formData.password)
    
    axios.get(`http://localhost:3000/user`).then((response) => {
      setData(response.data);
    });
  
  // else{
  //   alert("fill the data first")
  // }
  }, []);
 
  const validateUser = (inputData) => {
    let isValid = false;
    data &&
      data.map((val) => {
        // console.log(val.email);
        // console.log(inputData.email);
        if (
          val.email === inputData.email &&
          val.password === inputData.password
        ) {
          isValid = true;
          // console.log("sahi hai");
          navigate("/");
        } else {
          alert("wrong credentials")
        }
      });
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    isSignUp
      ? setSignUpValues({ ...signUpValues, [name]: value })
      : setSignInValues({ ...signInValues, [name]: value });
    // console.log(signUpValues);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(isSignUp ? signUpValues : signInValues));
    setIsSubmit(true);
    if(isSubmit){
    const formData = signUpValues;
    const inputData = signInValues;
    isSignUp ? registerUser(formData) : validateUser(inputData);
    }
    else{
      alert("Please Fill All Data")
    }
  };

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      alert("form submitted Successfully");
      setTimeout(()=>{
        window.location.reload()},1500)

    }
  }, [formErrors]);

  const validate = (values) => {
    const errors = {};
    if (isSignUp) {
      if (!values.username.trim()) {
        errors.username = "Username is required";
      }
      if (!values.email.trim()) {
        errors.email = "email is required";
      }
      if (!values.password.trim()) {
        errors.password = "password is required";
      }
     
    } else if(isSignUp != true) {
      if (!values.email.trim()) {
        errors.email = "Email is required";
      }
      if (!values.password.trim()) {
        errors.password = "Password is required";
      }
    }
    return errors;
  };

  return (
    <div className="wrapper">
      <div className={`form-container ${isSignUp ? "sign-up" : "sign-in"}`}>
        <form onSubmit={handleSubmit} method="post" className="login-form">
          <h1>WELCOME!</h1>
          <h5>TO YOUR OWN WARDROBE</h5>
          {isSignUp ? (
            <>
              <h1>Sign Up</h1>
              <TextField
                id="User Name"
                label="User Name"
                name="username"
                variant="standard"
                type="text"
                value={signUpValues.username}
                onChange={handleChange}
                onfo
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
             
            </>
          ) : (
            <>
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

              {formErrors.email && <p className="para">{formErrors.email}</p>}
              <TextField
                id="password"
                label="Password"
                type="password"
                variant="standard"
                value={signInValues.password}
                onChange={handleChange}
                name="password"
              />
              {formErrors.password && (
                <p className="para">{formErrors.password}</p>
              )}
             
            </>
          )}

          <Button type="submit" id="form-btn">
            {isSignUp ? "Sign Up" : "Sign In"}
          </Button>

          <a className="toggle-btn" onClick={toggleForm}>
            {isSignUp
              ? "Already have an account? Sign In"
              : "Don't have an account? Sign Up"}
          </a>
        </form>
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
