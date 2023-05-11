import React from 'react'
import './about.css'
import Me from '../../assets/experience.jpg'
import {VscBookmark} from 'react-icons/vsc'
import {AiFillFolderOpen} from 'react-icons/ai'

const About = ()=>{
    return (
        <section id="about">
            <h2>About me</h2>
            
            
            <div className = "container about_container">
                
                <div className="about_content">
                    <div className="about_cards">
                        <article className="about_card">
                            <VscBookmark className="about_icon"/>
                            <h5>Experiences</h5>
                            <small>3+ years CS learning experiences in Western University</small>
                        </article>
                        <article className="about_card">
                            <AiFillFolderOpen className="about_icon"/>
                            <h5>Projects</h5>
                            <small>
                                <h4>1.Car Dealer website</h4>

                            </small>
                        </article>
                        
                    
                    </div>

                </div>
              
                    <article className = "about_content">    
                    <h4>"Motivated junior software engineer with over three years of learning experience in computer science. Skilled in designing and implementing scalable solutions that meet the needs of clients. Seeking an internship position that utilizes my skills and experience."</h4>
                    </article>      
                
            </div>

        </section>
            
    )
}

export default About