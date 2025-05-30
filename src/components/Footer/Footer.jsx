import {Link} from 'react-router-dom'
import { useContext } from 'react'

//ASSETS
import BrazilIcon from '../../assets/br-icon.svg'
import UsaIcon from '../../assets/usa-icon.svg'
import InstaIcon from '../../assets/insta-icon.svg'
import FaceIcon from '../../assets/face-icon.svg'
import TwitterIcon from '../../assets/twitter-icon.svg'
import LinkedinIcon from '../../assets/linkedin-icon.svg'
import DncIcon from '../../assets/dnc-logo.svg'
import './Footer.css'

//COMPONENT
import Button from '../Button/Button'

//CONTEXT
import { AppContext } from '../../context/appContext'

const Footer = () =>{
    const appContext = useContext(AppContext)
    const changeLanguage = (country) => {
        appContext.setLanguage(country)
    }

    return(
        <footer>
            <div className="container">
                <div className="d-flex jc-space-between mobile-fd-column">
                    <div>
                        <> <img className='dnc-logo' src={DncIcon} alt="error" /> </>
                        <p className='gray-1-color footer-text'>{appContext.languages[appContext.language].general.footerLogoText}</p>
                        <div className='d-flex social-links'>
                            <a href="https://google.com" target='_blank'>
                                <img src={FaceIcon} alt="error" />
                            </a>

                            <a href="https://google.com" target='_blank'>
                                <img src={TwitterIcon} alt="error" />
                            </a>

                            <a href="https://google.com" target='_blank'>
                                <img src={LinkedinIcon} alt="error" />
                            </a>

                            <a href="https://google.com" target='_blank'>
                                <img src={InstaIcon} alt="error" />
                            </a>
                        </div>
                    </div>
                    <div className='d-flex mobile-fd-column'>
                        <div className='footer-col'>
                            <h3>{appContext.languages[appContext.language].general.pages}</h3>
                            <ul>
                                <li><Link to='/'>{appContext.languages[appContext.language].menu.home}</Link></li>
                                <li><Link to='/about'>{appContext.languages[appContext.language].menu.about}</Link></li>
                                <li><Link to='/projects'>{appContext.languages[appContext.language].menu.projects}</Link></li>
                                <li><Link to='/contact'>{appContext.languages[appContext.language].menu.contact}</Link></li>
                            </ul>
                        </div>
                        <div className='footer-col'>
                            <h3>{appContext.languages[appContext.language].general.contact}</h3>
                            <p className='gray-1-color'>
                                R. Justino Cobra, 61 – Vila Ema | São José dos Campos – SP | CEP 12243-030 
                            </p>
                            <p className='gray-1-color'>suporte@escoladnc.com.br</p>
                            <p className='gray-1-color'>(19) 99187-4342</p>
                        </div>
                    </div>
                </div>
                <div className='d-flex jc-space-between gray-1=color al-center'>
                    <p>Copyright © DNC - 2024</p>
                    <div className="d-flex langs-area jc-space-between">
                        <Button buttonStyle="unstyled" onClick = {() => changeLanguage('br')}>
                            <img src={BrazilIcon} alt="error" width="29px"/>
                        </Button>
                        <Button buttonStyle="unstyled" onClick = {() => changeLanguage('en')}>
                            <img src={UsaIcon} alt="error" width="29px" />
                        </Button>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer