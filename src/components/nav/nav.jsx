import React from 'react'
import './nav.css'
import {AiTwotoneHome} from 'react-icons/ai'
import {SiAboutdotme} from 'react-icons/si'
import {RiProjectorFill} from 'react-icons/ri'
import {IoIosContact} from 'react-icons/io'
import {BiBook} from 'react-icons/bi'
import {useState} from 'react'
const Nav = ()=>{
    const [activeNav, setActiveNav] = useState("#");
    return (
        <nav id = "nav_content">
            
            <a href="#" onClick={()=> setActiveNav('#')} className={activeNav === '#' ? 'active':''}><AiTwotoneHome /></a>
            <a href="#about" onClick={()=> setActiveNav('#about')} className={activeNav === '#about' ? 'active':''}><SiAboutdotme /></a>
            <a href="#portfolio" onClick={()=>setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'active':''}><RiProjectorFill /></a>
            <a href="#experience" onClick={()=> setActiveNav('#experience')} className={activeNav === '#experience' ? 'active':''}><BiBook /></a>
            <a href="#contact" onClick={()=> setActiveNav('#contact')} className={activeNav === '#contact' ? 'active':''}><IoIosContact /></a>

        </nav>
    )
}

export default Nav