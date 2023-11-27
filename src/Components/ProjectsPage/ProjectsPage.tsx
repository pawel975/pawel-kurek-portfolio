import "./ProjectsPage.scss";
import projects from "../../data/projects.tsx";
import Project from "../Project/Project.tsx";
import { useEffect } from "react";
import gsap from "gsap";

const finishedProjects = projects.map((project) => {
  const {
    id,
    name,
    isFinished,
    description,
    images,
    techStack,
    githubLink,
    liveVersionLink,
  } = project;

  if (!isFinished) return null;

  return (
    <Project
      key={id}
      id={id}
      name={name}
      isFinished={isFinished}
      description={description}
      images={images}
      techStack={techStack}
      githubLink={githubLink}
      liveVersionLink={liveVersionLink}
    />
  );
});

const inProgressProjects = projects.map((project) => {
  const {
    id,
    name,
    isFinished,
    description,
    images,
    techStack,
    githubLink,
    liveVersionLink,
  } = project;

  if (isFinished) return null;

  return (
    <Project
      key={id}
      id={id}
      name={name}
      isFinished={isFinished}
      description={description}
      images={images}
      techStack={techStack}
      githubLink={githubLink}
      liveVersionLink={liveVersionLink}
    />
  );
});

const ProjectsPage = () => {
  useEffect(() => {
    const projectsPageEls = document.querySelector("#projects-page")!.children;

    [...projectsPageEls].forEach((element) => {
      gsap.from(element, {
        scrollTrigger: {
          trigger: element,
          toggleActions: "play none none none",
        },
        duration: 0.5,
        opacity: 0,
        x: "-50",
      });
    });
  });

  return (
    <section id="projects-page">
      <header className="subtitle">
        <h2>Selected personal projects</h2>
      </header>
      {finishedProjects}
      <h3>In progress projects...</h3>
      {inProgressProjects}
    </section>
  );
};

export default ProjectsPage;
