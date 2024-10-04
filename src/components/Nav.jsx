import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../css/Base.css'
import '../css/Nav.css'
import ElectraAutoLogo from '../assets/ElectraAutoLogo.png'


function Nav() {
  return (
    <>
      <div className='navBar'>
        <img src={ElectraAutoLogo} className='logoImg' />
        <li><Link to="/" className='navLink'>Home</Link></li>
        <li><Link to="/produtos" className='navLink'>Produtos</Link></li>
        <li><Link to="/sobre" className='navLink'>Sobre</Link></li>
        <li><Link to="/login" className='navLink'>Login</Link></li>
      </div>
    </>
  );
}

export default Nav;