import React from "react";
import SourceLink from "../SourceLink/SourceLink.tsx";
import "./ProjectInfo.scss";

interface ProjectInfoInterface {
  name: string;
  description: string;
  techStack: React.ReactElement[];
  githubLink: string;
  liveVersionLink: string;
}

const ProjectInfo = ({
  name,
  description,
  techStack,
  githubLink,
  liveVersionLink,
}: ProjectInfoInterface) => {
  const allTechs = techStack.map((tech) => tech);

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
