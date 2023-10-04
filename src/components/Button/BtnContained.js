import React from 'react'
import { Button ,styled} from '@mui/material'

const ContainedBtn =styled(Button)({
  boxShadow: 'none',
  textTransform: 'none',
  fontSize: 16,
  padding: '10px 20px',
  width: "140px",
  borderRadius:0,
  lineHeight: 1.5,
  backgroundColor: 'white',
  color:"black !important",
  fontFamily: [
    '-apple-system',
    'BlinkMacSystemFont',
    '"Segoe UI"',
    'Roboto',
    '"Helvetica Neue"',
    'Arial',
    'sans-serif',
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
  ].join(','),
  '&:hover': {
    backgroundColor: 'black',
    color:"white !important",
    boxShadow: 'none',
  },
  '&:active': {
    boxShadow: 'none',
    backgroundColor: 'gray',
    borderColor: '#005cbf',
  },
  '&:focus': {
    boxShadow: '1 0 2 0.2rem rgba(0,13,250,.5)'
  },
})
 


const BtnContained = ({title}) => {
  return (
    <>
    <ContainedBtn>{title}</ContainedBtn>
    </>
  )
}

export default BtnContained
