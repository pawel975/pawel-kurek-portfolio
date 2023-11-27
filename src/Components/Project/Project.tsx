import { ProjectInterface } from "data/projects.tsx";
import ProjectInfo from "../ProjectInfo/ProjectInfo.tsx";
import Slider from "../Slider/Slider.tsx";
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
}: {
  key: number;
  id: number;
} & ProjectInterface) => {
  return (
    <div key={key} id={id as unknown as string} className="project">
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
