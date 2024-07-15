import React from 'react';
import logo from '../images/L7-logo.png';


const Navbar = () => {
  return (
    <div className='logo'>
      <br />
      <img src={logo} alt="logo"
      style={{width:'90px',height:'60px',
        marginLeft:'20px'
      }} />
    </div>
  )
}

export default Navbar