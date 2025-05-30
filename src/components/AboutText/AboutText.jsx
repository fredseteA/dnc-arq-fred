import { AppContext } from '../../context/appContext'
import './AboutText.css'
import { useContext } from 'react'

const AboutText = () => {
    const appContext = useContext(AppContext)
    return(
        <div className='container'>
            <div className='text-section d-flex'>
                <div className='text-section-text'>
                    <h2>{appContext.languages[appContext.language].about.title}</h2>
                </div>
                <div className='text-section-text'>
                    <p className='primary-color'>{appContext.languages[appContext.language].about.p1}</p>
                    <p className='gray-1-color'>{appContext.languages[appContext.language].about.p2}</p>
                    <p className='gray-1-color'>{appContext.languages[appContext.language].about.p3}</p>
                </div>
            </div>
            
        </div>
    )
}
//deixar disponivel para outros componentes
export default AboutText