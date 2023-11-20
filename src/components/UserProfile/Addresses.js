import React from 'react'
import "../UserProfile/Addresses.css"
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button } from '@mui/material';

const Addresses = () => {

    function handleInput(event){

        const val=event.target.value;
        
    
      }
  return (
    <div className='AccountSetting'>
          <h1>Address</h1>
       <div className="right-side ">
          <form action="" className="form">
            <Box
              component="form"
              sx={{
                "& > :not(style)": {marginBottom:2, width: "25ch" },
                
              }}
              noValidate
              autoComplete="off"
              className="input-box-container"
            >
              
             
              <TextField
                required
                id="outlined-basic"
                label="Country"
                variant="outlined"
                size="small"
                className="input-box"
                onChange={(e)=>handleInput(e)}
              />
              <TextField
                required
                id="outlined-basic"
                label="Pincode"
                variant="outlined"
                size="small"
                className="input-box"
                onChange={(e)=>handleInput(e)}
              />
              <TextField
                required
                id="outlined-basic"
                label="State"
                variant="outlined"
                size="small"
                className="input-box"
                onChange={(e)=>handleInput(e)}
              />
              <TextField
                required
                id="outlined-basic"
                label="City"
                variant="outlined"
                size="small"
                className="input-box"
                onChange={(e)=>handleInput(e)}
              />
              
              <TextField
                required
                id="outlined-basic"
                label="Address"
                variant="outlined"
                size="small"
                className="input-box"
                onChange={(e)=>handleInput(e)}
              />
                <Button
                     
                     variant="contained"
                     className="submit-btn"
                     type='submit'
                   >
                    Submit
                     
                   </Button>
            </Box>
          </form>
        </div>
    </div>
  )
}

export default Addresses
