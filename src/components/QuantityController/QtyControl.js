import React, { useState } from 'react'
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';
import IndeterminateCheckBoxOutlinedIcon from '@mui/icons-material/IndeterminateCheckBoxOutlined';
import axios from 'axios';

const QtyControl = ({cartItem , onQuantityChange }) => {
    
    
    const [val,setVal]=useState(cartItem.quantity)
   
   
    function increment(){

        const updatedQuantity=val +1;
        let qty=updatedQuantity
        setVal(updatedQuantity)
       
        onQuantityChange(qty);
        console.log('New quantity:', updatedQuantity); 
        
      }
      function decrement(){
        if (val>1){
          const updatedQuantity=val-1;
          let qty=updatedQuantity
          setVal(updatedQuantity)
          // const updatedCartItem = { ...cartItem, quantity: updatedQuantity };
          // updateCartItem(updatedCartItem)
          onQuantityChange(qty);
          console.log('New quantity:', updatedQuantity); 
          
        }
        
    }

    // const updatedCartItem = { ...cartItem, quantity: val };
    // updateCartItem(updatedCartItem)

    // function updateCartItem(item){
      
      // axios.put(`http://localhost:8000/Cart/${item.id}`, item)

      // .then((response)=>{
      //   console.log("cart item updated"+response.data)
        


      // })
      // .catch((error)=>{
      //   console.log("Cart item cannot be updated",error)
      // })
    // }
    // function updateCartItem2(item){
      
    //   axios.put(`http://localhost:8000/Cart/${item.id}`, item)

    //   .then((response)=>{
    //     console.log("cart item updated"+response.data)
        


    //   })
    //   .catch((error)=>{
    //     console.log("Cart item cannot be updated",error)
    //   })
    // }


  return (
    <div style={{display:"flex" , justifyContent:"space-between" , alignItems:"center" , border:"1px solid  #e2e2e2"}} >
      <IndeterminateCheckBoxOutlinedIcon onClick={()=>decrement()}></IndeterminateCheckBoxOutlinedIcon>
      <span style={{alignSelf:"center"}} >{val}</span>
      <AddBoxOutlinedIcon onClick={()=>increment()}></AddBoxOutlinedIcon>
    </div>
  )
}

export default QtyControl
