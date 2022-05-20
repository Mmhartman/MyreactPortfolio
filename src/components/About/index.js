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
                <p>Lorem ipsum dolor sit amet. 33 exercitationem dolorem et repellat tenetur qui galisum fugiat ad inventore temporibus et cupiditate minus. 33 quis possimus in nihil voluptatibus est expedita dolorem. Hic nihil recusandae ut reiciendis repellendus eum itaque molestiae? Est galisum dolorem est doloremque animi vel dolor suscipit eos repellat consectetur et quae laudantium.</p>
                <p>Lorem ipsum dolor sit amet. 33 exercitationem dolorem et repellat tenetur qui galisum fugiat ad inventore temporibus et cupiditate minus. 33 quis possimus in nihil voluptatibus est expedita dolorem. </p>
                <p>Hic nihil recusandae ut reiciendis repellendus eum itaque molestiae? Est galisum dolorem est doloremque animi vel dolor suscipit eos repellat consectetur et quae laudantium.</p>
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
