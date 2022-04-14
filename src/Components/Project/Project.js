import ProjectInfo from "../ProjectInfo/ProjectInfo";
import Slider from "../Slider/Slider";
import './Project.scss';

const Project = ({key, id, name, description, images, techStack, githubLink, liveVersionLink}) => {
    return (
        <div key={key} id={id} className="project">
            <Slider images={images} />
            <ProjectInfo
                name={name}
                description={description} 
                techStack={techStack} 
                githubLink={githubLink} 
                liveVersionLink={liveVersionLink} 
            />
        </div>
    )
}

export default Project;