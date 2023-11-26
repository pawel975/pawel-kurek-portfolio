import About from "../About/About";
import LandingPage from "../LandingPage/LandingPage";
import ProjectsPage from "../ProjectsPage/ProjectsPage";

const Main = () => {
  return (
    <main className="portfolio">
      <LandingPage />
      <About />
      <ProjectsPage />
    </main>
  );
};

export default Main;
