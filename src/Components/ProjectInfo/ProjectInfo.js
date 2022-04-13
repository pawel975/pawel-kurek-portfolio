
const ProjectInfo = ({description, techStack, githubLink, liveVersionLink}) => {

    const allTechs = techStack.map(tech => (
        <div className="tech">
            <span>{tech.name}</span>
            <img src={tech.icon} alt="technology icon"/>
        </div>
    ))

    return (
        <div className="project-info">
            <header>{description}</header>
            {allTechs}
        </div>
    );
};

export default ProjectInfo;