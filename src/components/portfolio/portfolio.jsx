import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/product01.jpg'
const Portfolio = ()=>{
    return (
        <section id="portfolio">
            <h2>Portfolio</h2>
            <div className ="container portfolio_container">
                <div className = "portfolio_items">
                <article className="portfolio_item">
                    <div className="portfolio_item_image">
                        <img src={IMG1} alt="imag_first"></img>

                    </div>
                    <h3>Car Dealer Website</h3>
                    <a href="index02.html" className="btn" target="_blank">Open</a>{/*the projects in the github */}

                </article>

                </div>

                

            </div>
        </section>
    )
}

export default Portfolio