import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import Banner from '../components/Banner/Banner'
import AboutText from '../components/AboutText/AboutText'
import { useContext } from 'react'

//CONTEXT
import { AppContext } from '../context/AppContext'

const About = () => {

    const appContext = useContext(AppContext)
    return(
        <>
        <Header />
        <Banner title={appContext.languages[appContext.language].menu.about} image="about.jpg"></Banner>
        <div className='container'>
                <AboutText/>
            </div>      
        <Footer />
        </>
    )
}
//deixar disponivel para outros componentes
export default About