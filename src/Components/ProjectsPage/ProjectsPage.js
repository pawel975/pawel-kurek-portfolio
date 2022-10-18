import './ProjectsPage.scss'
import projects from '../../helpers/projects';
import Project from '../Project/Project';
import { useEffect } from 'react';
import gsap from 'gsap';

const allProjects = projects.map(project => (
    <>
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
    </>
))

const ProjectsPage = () => {

    useEffect(()=> {

        const projectsPageEls = document.querySelector("#projects-page").children;

        [...projectsPageEls].forEach(element => {
            gsap.from(element, {
                scrollTrigger: {
                    trigger: element,
                    toggleActions: "play none none none",
                },
                duration: 0.5,
                opacity: 0,
                x: '-50',
            })
        })

    })

    return(
        <section id="projects-page">
            <header className='subtitle'>
                <h2>Selected personal projects</h2>
            </header>
            {allProjects}
        </section>
    )
} 

export default ProjectsPage;