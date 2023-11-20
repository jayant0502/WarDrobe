import React, { useState, useEffect } from "react";
import "../UserProfile/AccountSetting.css";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import axios from "axios";

const AccountSetting = ({ activePage }) => {
  // const Email = sessionStorage.getItem("email");
  const userId = sessionStorage.getItem("id");
  
  const [userDetails, setUserDetails] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    id: userId,
  });
  
  const [autoFillData, setAutofillData] = useState( userDetails );
 
  
  // get user data from DB--------------------
  
  useEffect(() => {
    try {
      axios
      .get(`http://localhost:8000/profile?id=${userId}`)
      .then((res) => {
        setUserDetails(res.data);
        setAutofillData(res.data);
        // console.log(res.data[0])
      });
    } catch (error) {
      console.log("Cannot fetch user data", error);
    }
  }, [userId]);

 

  //Update the data---------------------------

  let [firstName, setFirstName] = useState(userDetails?userDetails.firstName:'');
  let [lastName, setLastName] = useState(userDetails?userDetails.lastName:'');
  let [email, setEmail] = useState(userDetails?userDetails.email:'');
  let [phoneNumber, setPhoneNumber] = useState(userDetails?userDetails.phoneNumber:'');

  function updateData() {
    let updatedDetails = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      phoneNumber: phoneNumber,
      id: userId,
    };
    console.log("updatedDetails ", updatedDetails);
    // Check if user data is already present
    if (userDetails.length  === 1) {
      // User data is present, perform a PUT request to update
      axios
        .put(`http://localhost:8000/profile/${userId}`, updatedDetails)
        .then((response) => {
          console.log("User details updated successfully", response.data);
        })
        .catch((error) => {
          console.log("Error updating user details", error);
        });
    } else {
      // User data is not present, perform a POST request to create
      axios
        .post(`http://localhost:8000/profile`, updatedDetails)
        .then((response) => {
          console.log("User details created successfully", response.data);
        })
        .catch((error) => {
          console.log("Error creating user details", error);
        });
    }
  }

  return (
    <div className="AccountSetting">
      <h1>Personal Information</h1>
      <div className="prsnl-info right-side">
       
          <Box
          
            component="form"
            method="post"
            onSubmit={(e) => {
              e.preventDefault();
              updateData();
            }}
            sx={{
              "& > :not(style)": { marginBottom: 2, width: "25ch" },
            }}
            noValidate
            autoComplete="off"
            className="input-box-container form"
          >
            <div className="name-fields">
              <TextField
                required
                id="outlined-basic"
                // label= { autoFillData !=='' ? "":'First Name'}
                name="firstName"
                variant="outlined"
                size="small"
                className="input-box"
                // value={autoFillData[0]?.firstName}
                placeholder={autoFillData !== "" ? 'First Name ' : (autoFillData[0]?.firstName) }
                onChange={(e) => setFirstName(e.target.value)}
              />
              <TextField
                required
                id="outlined-basic"
             
                label= { autoFillData? "":'Last Name'}
                name="lastName"
                variant="outlined"
                size="small"
                className="input-box"
                // value={autoFillData[0]?.lastName}
                placeholder={autoFillData?(autoFillData[0]?.lastName) : ('First Name ')}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
            <TextField
              required
              id="outlined-basic"
              label= { autoFillData? "":'Email'}
              
              variant="outlined"
              name="email"
              size="small"
              className="input-box"
              // value={autoFillData[0]?.email}
              placeholder={autoFillData?(autoFillData[0]?.email) : 'First Name '}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              required
              id="outlined-basic"
              label= { autoFillData? "":'Phone Number'}
              variant="outlined"
              name="phoneNumber"
              size="small"
              className="input-box"
              // value={autoFillData[0]?.phoneNumber}
              placeholder={autoFillData?(autoFillData[0]?.phoneNumber) : ('First Name ')}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />

            <Button variant="contained" type="submit" className="submit-btn">
              {userDetails.length === 1 ? "Update" : "Submit"}
            </Button>
          </Box>
      
      </div>
    </div>
  );
};

export default AccountSetting;
