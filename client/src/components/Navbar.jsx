import React from 'react'
import {useState} from 'react';
import { navLinks } from '../constants';
import logo from '../assets/logo-white.png';
import menu from '../assets/menu.svg';
import close from '../assets/close.svg'
import { Link, animateScroll as scroll } from "react-scroll";
import { BrowserRouter as Router, Link as RouterLink } from 'react-router-dom';

const Navbar = () => {
const [toggle, setToggle] = useState(false);
// const [view, setView] = useState('home')
console.log(navLinks)

  return (
    <div className='w-full flex py-6 justify-between items-center'>
        <img src={logo} alt='cs-logo' className="w-[200px] h-[100px]"/>
        <ul className="list-none sm:flex hidden justify-end items-center flex-1 z-[100]">
        {navLinks.map((nav, index) => (
            <li key={nav.id} className="font-poppins font-normal text-[16px] text-white mr-10">
            {index === navLinks.length - 1 ? (
                <RouterLink to="/login" className="border border-white rounded-lg px-4 py-2 bg-transparent text-white">
                        {nav.title}
                    </RouterLink>
            ) : (
                <Link 
                activeClass="active"
                spy={true}
                smooth={true}
                offset={-10}
                duration={200}
                
                to={`${nav.id}`}>{nav.title}</Link>
            )}
            </li>
        ))}
        </ul>


        <div className="sm:hidden flex flex-1 justify-end items-center">
            <img src={toggle ? close : menu }
            alt='menu'
            className='w-[28px] h-[28px] object-contain'
            onClick={() => setToggle((prev) => !prev)}
            />

            <div className={`${toggle ? 'flex' : 'hidden'} p-6 position-absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded sidebar`}>
            
            <ul className="list-none flex flex-col justify-end items-center flex-1">
                {navLinks.map((nav, index) => (
                <li key={nav.id} className="font-poppins font-normal cursor-pointer text-[16px] text-white mb-4">
                    {index === navLinks.length - 1 ? (
                    // <button className="border border-white rounded-lg px-4 py-2 bg-transparent text-white">{nav.title}</button>
                    <RouterLink to="/login" className="border border-white rounded-lg px-4 py-2 bg-transparent text-white">
                    {nav.title}
                    </RouterLink>
                    ) : (
                    // <a href={`#${nav.id}`}>{nav.title}</a>
                    <Link 
                    activeClass="active"
                    spy={true}
                    smooth={true}
                    offset={-10}
                    duration={200}
                    
                    to={`${nav.id}`}>{nav.title}</Link>

                    )}
                </li>
                ))}
            </ul>
            
            </div>

        </div>


    </div>
  )
}

export default Navbar