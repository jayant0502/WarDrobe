import React, { useState } from 'react'
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';
import IndeterminateCheckBoxOutlinedIcon from '@mui/icons-material/IndeterminateCheckBoxOutlined';

const QtyControl = () => {
    const [val,setVal]=useState(0)
    function increment(val){
        setVal(prev=> prev+1);
    }
    function decrement(val){
        if (val>0){
            setVal(prev=>prev-1);
        }
        else{
            setVal(0)
        }
    }
  return (
    <div style={{display:"flex" , justifyContent:"space-between" , alignItems:"center" , border:"1px solid  #e2e2e2"}} >
      <IndeterminateCheckBoxOutlinedIcon onClick={()=>{decrement(val)}}></IndeterminateCheckBoxOutlinedIcon>
      <span style={{alignSelf:"center"}} >{val}</span>
      <AddBoxOutlinedIcon onClick={()=>{increment(val)}}></AddBoxOutlinedIcon>
    </div>
  )
}

export default QtyControl
