import React from 'react'
import { Button ,styled} from '@mui/material'

const OutlinedBtn =styled(Button)({
  boxShadow: 'none',
  textTransform: 'uppercase',
  fontSize: 16,
  padding: '9px 20px',
  width: "140px",
  borderRadius:0,
  lineHeight: 1.5,
  border: '1px solid white',
  backgroundColor: 'transparent',
  color:"White !important",
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
    backgroundColor: 'white',
    color:"black !important",
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
 


const BtnOutlined = ({title}) => {
  return (
    <>
    <OutlinedBtn>{title}</OutlinedBtn>
    </>
  )
}

export default BtnOutlined
