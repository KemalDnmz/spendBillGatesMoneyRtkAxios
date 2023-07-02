import React from 'react'
import BillImage from "../images/billgates.jpeg"
import 'animate.css';

function HeaderA() {
  return (
    <div className='headerDiv'>
      <img className='animate__animated animate__wobble' src={BillImage} alt="" />
      <h1 style={{fontFamily:"Verdana"}} className='animate__animated animate__fadeInLeft'>Spend Bill Gates' Money</h1>
    </div>
  )
}

export default HeaderA