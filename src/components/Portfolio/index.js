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
                    {/* <div>{renderPortfolio()}</div> */}
                </div>
            </div>
            <Loader type="pacman" />
            </>        
    );
}

export default Portfolio;