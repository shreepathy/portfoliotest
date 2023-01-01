import React from 'react'
import './Navbar.css'
import { Link } from 'react-scroll'
const Navbar = () => {
  return (
    <div className="n-wrapper">
        <div className="n-left">
            <div className="n-name">Siddhesha</div>
            <span>Togggle</span>
        </div>
        <div className="n-right">
            <div className="n-list">
                <ul style={{listStyleType:'none'}}>
                <Link spy={true} to="Navbar" smooth={true} activeClass="activclass">
                    <li>Home</li>
                </Link>
                <Link spy={true} to="Services" smooth={true} >
                    <li>Services</li>
                </Link>
                <li>Experiences</li>
                <li>Portfoio</li>
                <li>Testimonials</li>
               
                </ul>
            </div>
            <button className="button n-button">Contact us</button>
        </div>
    </div>
  )
}

export default Navbar