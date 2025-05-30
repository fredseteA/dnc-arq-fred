import './ProjectsList.css'
import { useState, useEffect, useContext } from 'react'

//ASSETS
import LikedFilled from '../../assets/liked-filled.svg'
import LikeOutline from '../../assets/like.svg'

//COMPONENTS
import Button from '../Button/Button'

//UTILS
import {getApiData} from '../../services/apiServices'

//CONTEXT
import { AppContext } from '../../context/appContext'

const ProjectsList = () => {
    const [projects, setProjects] = useState([])
    const [favProject, setFavProject] = useState([])
    const appContext = useContext(AppContext)

    const handleSavedProjects = (id) =>{
            setFavProject((prevFavProjects) => {
                if (prevFavProjects.includes(id)) {
                    const filterArray = prevFavProjects.filter((projectId)=> projectId != id)
                    sessionStorage.setItem('favProjects', JSON.stringify(filterArray))
                    return prevFavProjects.filter((projectId)=> projectId != id)
                } else {
                    sessionStorage.setItem('favProjects', JSON.stringify([...prevFavProjects, id]))
                    return [...prevFavProjects, id]
                }
            })
        }

    useEffect(()=>{
        const fetchData = async() => {
            try {
                const projectResponse = await getApiData('projects')
                setProjects(projectResponse)
            } catch{
                setProjects([])
            }
        }

        fetchData()
    }, [])

    useEffect(() => {
        const savedFavProjects = JSON.parse(sessionStorage.getItem('favProjects'))
        if(savedFavProjects){
            setFavProject(savedFavProjects)
        }
    }, [])

    return(
        <div className="projects-section">
            <div className="projects-hero">
                <h2>{appContext.languages[appContext.language].projects.title}</h2>
                <p>{appContext.languages[appContext.language].projects.subtitle}</p>
            </div>
            <div className="projects-grid">
                {

                    projects ? 
                        projects.map((project) => {
                            
                            return (
                                
                                <div className="project-card d-flex fd-column jc-center al-center" key={project.id}>
                                    <div 
                                        className="thumb tertiary-background"
                                        style={{backgroundImage: `url(${project.thumb})`}}
                                    ></div>
                                    <h3>{project.title}</h3>
                                    <p>{project.subtitle}</p>
                                    <Button buttonStyle="unstyled" onClick={() => handleSavedProjects(project.id) }>
                                        <img src={favProject.includes(project.id) ? LikedFilled : LikeOutline} alt="error" />
                                    </Button>
                                    
                                </div>
                            )
                        })
                    : null
                }

            </div>
        </div>
    )
}
//deixar disponivel para outros componentes
export default ProjectsList