import React from 'react'
import './header.css'
import CTA from './CTA'
import Me from '../../assets/yushi.jpg'
import Headersocial from '../header/headersocial'

const Header = ()=>{
    return (
        <header>
            <div className="container header_container">
                <h5>Hello, I am</h5>
                <h1>Yushi</h1>
                <h5 className="text-light">Frontend developer</h5>
                <CTA />
                <Headersocial />
                <div className='me'>
                    <img src={Me} alt="me"/>
                </div>
                <a href="contact" className="scroll_down">Scroll_down</a>
                
            </div>

            
        </header>
    )
}

export default Header