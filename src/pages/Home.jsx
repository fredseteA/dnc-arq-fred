import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import Hero from '../components/Hero/Hero'
import ProjectsList from '../components/ProjectsList/ProjectsList'

const Home = () => {
    return(
        <>
            <Header />
            <div className='container'>
                <Hero/>
            </div>
            <div className='container'>
                <ProjectsList />
            </div>
            <Footer />
        </>
    )
}
//deixar disponivel para outros componentes
export default Home