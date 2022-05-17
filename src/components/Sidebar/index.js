import { Link, NavLink } from 'react-router-dom';
import './index.scss';
import LogoM  from '../../assets/images/logo-M.png';
import LogoSubtitle from '../../assets/images/logo_subM.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Sidebar = () => (
    <div className="nav-bar">
        {/* Default HOME PAGE */}
        <Link className="logo" to="/">
            <img src={LogoM} alt="logo" />
            <img className="sub-logo" src={LogoSubtitle} alt="MiAnn" />
        </Link>
        <nav>
            {/* === HOME === */}
            <NavLink exact="true"
                     activeclassname="active" 
                     to="/"
            >
                <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
            </NavLink>

            {/* === ABOUT === */}
            <NavLink exact="true"
                     activeclassname="active"
                     className="about-link"
                     to="/about"
            >           
                <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
            </NavLink>

            {/* === CONTACT === */}
            <NavLink exact="true" 
                     activeclassname="active"
                     className="contact-link" 
                     to="/contact"
            >
                <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e"/>
                
            </NavLink>
            
        </nav>

        <ul>
            {/* === LINKEDIN ===*/}
            <li>
                <a target="_blank"
                   rel="noreferrer"
                   href="https://www.linkedin.com/in/mi-annmiranda-hartman/"
                   >
                    <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e"  />
                </a>
            </li>
            
            {/* === GITHUB === */}
            <li>
                <a target="_blank"
                   rel="noreferrer"
                   href="https://github.com/Mmhartman"
                   >
                    <FontAwesomeIcon icon={faGithub} color="#4d4d4e"  />
                </a>
            </li>
        </ul>

    </div>

    )

export default Sidebar