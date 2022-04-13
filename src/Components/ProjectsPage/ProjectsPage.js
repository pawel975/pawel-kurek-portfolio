import './ProjectsPage.scss'
import projects from '../../helpers/projects';
import Project from '../../Project/Project';

const allProjects = projects.map(project => (
    <Project />
))

const ProjectsPage = () => {

    return(
        <section id="projects-page">
            {allProjects}
        </section>
    )
} 

export default ProjectsPage;