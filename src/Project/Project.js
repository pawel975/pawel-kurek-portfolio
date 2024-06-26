import ProjectInfo from "../Components/CourseInfo/CourseInfo";
import Slider from "../Slider/Slider";
import "./Project.scss";

const Project = ({
  key,
  id,
  name,
  description,
  images,
  techStack,
  githubLink,
  liveVersionLink,
}) => {
  return (
    <div key={key} id={id} className="project">
      <Slider images={images} liveVersionLink={liveVersionLink} />
      <ProjectInfo
        name={name}
        description={description}
        techStack={techStack}
        githubLink={githubLink}
        liveVersionLink={liveVersionLink}
      />
    </div>
  );
};

export default Project;
