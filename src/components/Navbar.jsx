import React from 'react'
import Logo from '../img/logo.png'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='container'>
            <div className='logo'>
                <img src={Logo} alt='logo' />
            </div>
            <div className='links'>
                <Link className='link' to="/?cat=art">
                    <h6>ART</h6>
                </Link>
                <Link className='link' to="/?cat=science">
                    <h6>SCIENCE</h6>
                </Link>
                <Link className='link' to="/?cat=technology">
                    <h6>TECHNOLOGY</h6>
                </Link>
                <Link className='link' to="/?cat=film">
                    <h6>FILM</h6>
                </Link>
                <Link className='link' to="/?cat=fashion">
                    <h6>FASHION</h6>
                </Link>
                <Link className='link' to="/?cat=food">
                    <h6>FOOD</h6>
                </Link>
                <span>ngisah</span>
                <span>Logout</span>
                <span className='write'>
                    <Link className="link" to="/write">Write</Link>
                </span>
                
            </div>
        </div>
    </div>
  )
}

export default Navbar