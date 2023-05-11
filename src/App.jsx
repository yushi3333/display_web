import React from 'react'
import Header from './components/header/header'
import Nav from './components/nav/nav'
import About from './components/about/about'
import Testimonial from './components/testimonial/testimonial'
import Portfolio from './components/portfolio/portfolio'
import Service from './components/service/service'
import Experience from './components/experience/experience'
import Contact from './components/contact/contact'

const App = ()=>{
    return (
        <>
            <Header /> 
            <Nav />
            <About />
            <Portfolio />
            <Experience />
            {/*<Service />*/}
            <Contact />
            <Testimonial />
            
        </>
    )
}

export default App