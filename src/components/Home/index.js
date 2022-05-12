import { Link } from 'react-router-dom';
import LogoTitle from '../../assets/images/logo-M.png';
import './index.scss';

const Home = () => {
    

    return (
        <div className="container home-page">
            <div className="text-zone"> 
            {/* contain animated text on the left side */}
                     <h1>Hi, <br /> I'm 
                     <img src={LogoTitle} alt="developer" />
                     i-Ann
                     <br />
                     web developer
                     </h1>
                     <h2>Frontend Developer / Business Analyst</h2>
                     <Link to="/contact" className="flat-button">CONTACT ME</Link>
            </div> 
        </div>
    );
}


export default Home 