import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import Banner from '../components/Banner/Banner'
import ProjectsList from '../components/ProjectsList/ProjectsList'
import { useContext } from 'react'

//CONTEXT
import { AppContext } from '../context/AppContext'

const Projects = () => {

    const appContext = useContext(AppContext)
    return(
        <>
            <Header />
            <Banner title={appContext.languages[appContext.language].menu.projects} image="projects.jpg"></Banner>
            <div className='container'>
                <ProjectsList />
            </div>
            <Footer />
        </>
    )
}
//deixar disponivel para outros componentes
export default Projects