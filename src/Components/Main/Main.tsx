import About from "../About/About.tsx";
import CoursesPage from "../CoursesPage/CoursesPage.tsx";
import LandingPage from "../LandingPage/LandingPage.tsx";
import ProjectsPage from "../ProjectsPage/ProjectsPage.tsx";

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
