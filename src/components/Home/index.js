import { Link } from 'react-router-dom';
import LogoTitle from '../../assets/images/logo-M.png';
import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import { useEffect, useState } from 'react';

const Home = () => {
    // Using the State Hook to define the state of the class, add animation hover so this is why use state.
    const [letterClass, setLetterClass] = useState('text-animate')

    // 2 arrays that we want to animate
    // == i-Ann
    const nameArray =  ['i','-','A', 'n', 'n']
    // == Web Developer ==
    const jobArray = [ 'w','e','b','','d','e','v','e','l','o','p','e','r', '.']



    // Use Effect Hook - I can use return like this: 
    // useEffect(() => {
    //   const timer =  setTimeout(() => {
    //       setLetterClass('text-animate-hover')
    //     }, 4000);
    //     return () => clearTimeout(timer);
    //   }, [])
   
    useEffect(() => {
         setTimeout(() => {
          setLetterClass('text-animate-hover')
        }, 4000)
      }, [])
   
    

    return (
        <div className="container home-page">
            <div className="text-zone"> 
            {/* contain animated text on the left side */}
                    <h1> 
                    <span className={letterClass}>H</span>
                    {/* Slight delay to animation, so it won't appear at the same time */}
                    <span className={`${letterClass} _12`}>i,</span>     
                    <br /> 
                    <span className={`${letterClass} _13`}>I</span> 
                    <span className={`${letterClass} _14`}>'m</span> 

                    <img 
                     src={LogoTitle}
                     alt="developer" 
                     />
                    {/* nameArray */}
                     <AnimatedLetters 
                     letterClass= {letterClass}
                     strArray= {nameArray} 
                     idx={15}
                     />
                     <br />
                     {/* jobArray */}
                    <AnimatedLetters 
                     letterClass= {letterClass}
                     strArray= {jobArray} 
                     idx={22} 
                     />
                   
                     </h1>
                     <h2>Frontend Developer / Business Analyst</h2>
                     <Link to="/contact" className="flat-button">CONTACT ME</Link>
            </div> 
        </div>
    );
}


export default Home 