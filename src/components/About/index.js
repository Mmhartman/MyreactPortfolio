import './index.scss';
import AnimatedLetters from '../AnimatedLetters/index';
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCss3, faGitAlt, faGithub, faHtml5, faJsSquare, faReact } from '@fortawesome/free-brands-svg-icons';
import Loader from 'react-loaders';

const About = () => {
    
    const [letterClass, setLetterClass] = useState('text-animate')
    
    useEffect(() => {
        setTimeout(() => {
         setLetterClass('text-animate-hover')
       }, 3000) // 3 seconds
     }, [])

    return (
        <>
        <div className="container about-page">
            <div className="text-zone">
                <h1>
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={['A', 'b', 'o', 'u', 't',' ' , 'm', 'e']}
                        idx={15} //1.5 seconds delay
                    />
                </h1>
                <p>Mi-Ann is a highly motivated and qualified ECBA Business Analyst, recognized for her proficiency in business analysis best practices. With a strong dedication to professional growth, she consistently seeks opportunities to expand her expertise. In addition to her comprehensive knowledge in this field, Mi-Ann holds certifications in AWS Cloud Practitioner and Microsoft Azure, underscoring her commitment to continuously enhancing her professional and technical competencies.</p>

                <p>During the challenging period of the pandemic and while awaiting her immigration approval status, Mi-Ann delved into programming and discovered a genuine passion for it. Engaging with fellow programmers in the industry, she actively cultivated her practical knowledge and gained invaluable insights into effective problem-solving approaches. Embracing the ever-evolving nature of technology, Mi-Ann consistently strives to provide a fresh perspective to each project she undertakes. </p>

                <p>To augment her programming skills, Mi-Ann is actively pursuing additional online courses. Currently, she is engrossed in coursework covering HTML, CSS3, JavaScript, and Data Analysis in Python. Mi-Ann's unwavering dedication to continuous learning enables her to thrive in challenging environments and eagerly embrace constructive criticism. Her open-mindedness and relentless pursuit of excellence empower her to deliver exceptional, innovative solutions.</p>

                <p>Beyond her professional pursuits, Mi-Ann is an ambivert with a profound appreciation for travel. Having explored various countries and lived in both New Zealand and the United States, she possesses a global mindset and deeply values diverse cultural experiences.</p>
            
                <p>Mi-Ann's remarkable combination of business analysis expertise, programming acumen, and relentless commitment to growth make her an exceptionally promising candidate for any organization.</p>
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
        <Loader type="pacman" />
        </>
    )
}

export default About;
