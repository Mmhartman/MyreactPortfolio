import React, { useState,useEffect } from "react";
import "./index.scss";
import Loader from "react-loaders";
import AnimatedLetters from "../AnimatedLetters";
import portfolioData from "../../data/portfolio.json";

// Create Boilerplate code in order to hook up create routes and create navigation
// ==== LOADING ANIMATION PACMAN ==
const Portfolio = () => {
    // usage hook
    const [letterClass, setLetterClass] = useState('text-animate');
    console.log(portfolioData);
  
    // TEXT HOVER 
    useEffect(() => {
        setTimeout(() => {
         setLetterClass('text-animate-hover')
       }, 3000) // 3 seconds
     }, [])

     // image from  public / portfolio\1
     const renderPortfolio = (portfolio) => {
        return (
            <div className="images-container">
                {
                    portfolio.map((port, idx) => {
                        return ( 
                            <div className="image-box" key={idx}>
                                <img 
                                src={port.cover}
                                className="portfolio-image"
                                alt="portfolio"
                                />
                            </div>
                        )                               
                })
            }
            </div>
        );
     }

    return ( 
            <>
            <div className="container portfolio-page">
                <div className="text-zone">
                    <h1 className="page-title">
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={['P', 'o', 'r', 't', 'f', 'o', 'l', 'i', 'o']}                 
                            idx={15}  // idx index loading 1.5 seconds 
                        />
                    </h1>
                    <div>{renderPortfolio(portfolioData.portfolio)}</div>
                </div>
            </div>
            <Loader type="pacman" />
            </>        
    );
}

export default Portfolio;