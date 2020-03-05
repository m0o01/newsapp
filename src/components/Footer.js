import React, {Component} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopyright } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faGithub } from '@fortawesome/free-brands-svg-icons'
import './styles/Footer.css'

class Footer extends Component {

    render(){
        return (
            <div className="footer">
                <ul className="contact">
                    <li>
                    <a href="https://www.facebook.com"><FontAwesomeIcon className="social-media" icon={faFacebook} size="2x" color="#fffff" /> </a>
                    </li>
                    <li>
                    <a href="https://www.github.com">
                    <FontAwesomeIcon className="social-media" icon={faGithub} size="2x" color="#fffff" /> 
                    </a>
                    </li>
                </ul>
                <p className="copyrights"> 
                <FontAwesomeIcon className="icon" icon={faCopyright} size="1x" color="#fffff" /> 
                Mohmmaed Mamoon
                </p>
            </div>
        )
    }
}

export default Footer