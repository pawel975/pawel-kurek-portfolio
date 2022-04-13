import ProjectInfo from "../ProjectInfo/ProjectInfo";
import Slider from "../Slider/Slider";

const Project = ({key, id, name, description, images, techStack, githubLink, liveVersionLink}) => {
    return (
        <div key={key} id={id} className="project">
            <header>{name}</header>
            <Slider images={images} />
            <ProjectInfo description={description} techStack={techStack} githubLink={githubLink} liveVersionLink={liveVersionLink} />
        </div>
    )
}

export default Project;