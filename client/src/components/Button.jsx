import React from 'react'
import styles from '../style'
import { BrowserRouter as Router, Link as RouterLink } from 'react-router-dom';


const Button = ({styles}) => {
  return (
  
    <RouterLink to='/login' type="button" className={`py-4 px-6 bg-blue-gradient
    font-poppins font-medium text-[18px] text-primary outline-none rounded
    ${styles}`}>
      Get Started
    </RouterLink>


   
  )
}

export default Button