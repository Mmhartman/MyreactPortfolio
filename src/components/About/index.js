import './index.scss';
import AnimatedLetters from '../AnimatedLetters/index';
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCss3, faGitAlt, faGithub, faHtml5, faJsSquare, faReact } from '@fortawesome/free-brands-svg-icons';

const About = () => {
    
    const [letterClass, setLetterClass] = useState('text-animate')
    
    useEffect(() => {
        setTimeout(() => {
         setLetterClass('text-animate-hover')
       }, 3000) // 3 seconds
     }, [])

    return (
        <div className="container about-page">
            <div className="text-zone">
                <h1>
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={['A', 'b', 'o', 'u', 't',' ' , 'm', 'e']}
                        idx={15} //1.5 seconds delay
                    />
                </h1>
                <p>Mi-Ann is a certified ECBA Business Analyst, who has an understanding of best practices in business analysis. She is seeking to expand her professional and technical competencies</p>

                <p>She became more interested in programming when the pandemic hit and whilst waiting for her immigration approval status. Engaging with other programmers in the industry enabled her to develop practical knowledge of how things are accomplished. Since the world is constantly evolving, she believes she can bring a fresh perspective to every project. Coding Bootcamp was the first step in getting structured training for her, and she is now taking other online courses to supplement her programming knowledge. She is currently continuing her education with coursework in HTML, CSS3, and Javascript. This makes her open to challenges and constructive criticism. She is open-minded and dedicates all her skills and talents to developing high-quality and unique products. </p>
            
                <p>She is an ambivert who has an innate love of travel, having explored different countries and lived in both New Zealand and the United States.</p>
            </div>
            <div className="stage-cube-cont">
                <div className="cubespinner">  
                    {/* Cube Spinner will hold the six sides of the cube into different icons */}
                    <div className="face1">
                        <FontAwesomeIcon icon={faHtml5} color="#F06529" />
                    </div>
                    <div className="face2">
                        <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
                    </div>
                    <div className="face3">
                        <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
                    </div>
                    <div className="face4">
                        <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
                    </div>
                    <div className="face5">
                        <FontAwesomeIcon icon={faGithub} color="#" />
                    </div>
                    <div className="face6">
                        <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
                    </div>
        
        
        
                </div>

            </div>
        </div>
    )
}

export default About;
