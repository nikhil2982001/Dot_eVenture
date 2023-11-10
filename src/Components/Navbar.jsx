import React,{useState} from 'react'
import logo from '/images/logo.png'
//import {Link} from 'react-router-dom';
import{useNavigate } from 'react-router-dom'
export default function Navbar() {
    const navigate= useNavigate()
    const [nav,setNav]=useState(false);
    const changeBackground=()=>{
        if(window.scrollY >=50){
            setNav(true);
        }else{
            setNav(false);
        }
    }
    window.addEventListener('scroll',changeBackground);
    function navigateToSection(path) {
        navigate(path)
        if(path==='/'){
            window.scrollTo({
                top: 0, // Scroll to the top of the page
                behavior: 'smooth', // Add smooth scrolling behavior
              });
            return;   
        }
        const element = document.querySelector(path);
        element.scrollIntoView({ behavior: 'smooth' });
    }

  return (
    <nav className={nav?"nav active":"nav"}>
        <button className='logo' onClick={() => navigateToSection('/')}>
            <img src={logo} alt='loading..'/>
            </button> 
            <input className='menu-btn' type='checkbox' id='menu-btn'/>
            <label className='menu-icon' htmlFor='menu-btn'>
                <span className='nav-icon'></span>
            </label>
            <ul className='menu'>
                <li><button onClick={() => navigateToSection('/')}>Home</button></li>
                <li><button onClick={() => navigateToSection('#features')}>Features</button></li>
                <li><button onClick={() => navigateToSection('#offer')}>Offer</button></li>
                <li><button onClick={() => navigateToSection('#contact')}>Contact</button></li>
            </ul>
        </nav>

  )
}
