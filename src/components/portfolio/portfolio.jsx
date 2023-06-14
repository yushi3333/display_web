import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/product01.jpg'
import IMG2 from '../../assets/database.png'
const Portfolio = ()=>{
    return (
        <section id="portfolio">
            <h2>Personal Projects</h2>
            <div className ="container portfolio_container">
                <div className = "portfolio_items">
                <article className="portfolio_item">
                    <div className="portfolio_item_image">
                        <img src={IMG1} alt="imag_first"></img>

                    </div>
                    <h3>Car Dealer Website</h3>
                    <a href="index02.html" className="btn" target="_blank">Open</a>{/*the projects in the github */}
                    
                </article>
                <article className="portfolio_item">
                    <div className="portfolio_item_image">
                        <img src= {IMG2} alt="img_second"></img>
                    </div>
                    <h3>Database System</h3>
                    <a href="https://yushi3333.github.io/employeesDemo/" className ="btn" target="_blank">Open</a>
                </article>

                </div>

                

            </div>
        </section>
    )
}

export default Portfolio