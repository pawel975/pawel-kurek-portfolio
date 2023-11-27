import SourceLink from "../SourceLink/SourceLink.tsx";
import "./ProjectInfo.scss";

const ProjectInfo = ({
  name,
  description,
  techStack,
  githubLink,
  liveVersionLink,
}: any) => {
  const allTechs = techStack.map((tech: any) => tech);

  return (
    <div className="project-info">
      <header>{name}</header>
      <p className="description">{description}</p>
      <div className="tech">{allTechs}</div>
      <div className="links">
        <SourceLink link={githubLink} name={"Github"} />
        <SourceLink link={liveVersionLink} name={"Live version"} />
      </div>
    </div>
  );
};

export default ProjectInfo;
