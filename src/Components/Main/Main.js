import About from "../About/About";
import CoursesPage from "../CoursesPage/CoursesPage";
import LandingPage from "../LandingPage/LandingPage";
import ProjectsPage from "../ProjectsPage/ProjectsPage";

const Main = () => {
  return (
    <main className="portfolio">
      <LandingPage />
      <About />
      <ProjectsPage />
      <CoursesPage />
    </main>
  );
};

export default Main;
