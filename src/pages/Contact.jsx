import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import Banner from '../components/Banner/Banner'
import ContactForm from '../components/ContactForm/ContactForm'
import { useContext } from 'react'

//CONTEXT
import { AppContext } from '../context/AppContext'

const Contact = () => {

    const appContext = useContext(AppContext)
    return(
        <>
        <Header />
        <Banner title={appContext.languages[appContext.language].menu.contact} image="contact.jpg"></Banner>
        <div className='container'>
            <ContactForm />
        </div>
        <Footer />
        </>
    )
}
//deixar disponivel para outros componentes
export default Contact