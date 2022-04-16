import './ProjectsPage.scss'
import projects from '../../helpers/projects';
import Project from '../Project/Project';

const allProjects = projects.map(project => (
    <Project 
        key={project.id} 
        id={project.id}
        name={project.name}
        description={project.description}
        images={project.images}
        techStack={project.techStack}
        githubLink={project.githubLink}
        liveVersionLink={project.liveVersionLink}
    />
))

const ProjectsPage = () => {

    return(
        <section id="projects-page">
            <header>
                <h2>Selected personal projects</h2>
            </header>
            {allProjects}
        </section>
    )
} 

export default ProjectsPage;