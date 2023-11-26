import "./CoursesPage.scss";
import { useEffect } from "react";
import gsap from "gsap";
import Slider from "../Slider/Slider";
import courses from "../../data/courses";
import Course from "../Course/Course";

const allCourses = courses.map((project) => {
  const { id, name, description, image, link } = project;

  return (
    <Course
      key={id}
      id={id}
      name={name}
      description={description}
      image={image}
      link={link}
    />
  );
});

const CoursesPage = () => {
  useEffect(() => {
    const projectsPageEls = document.querySelector("#courses-page").children;

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
    <section id="courses-page">
      <header className="subtitle">
        <h2>Courses</h2>
      </header>
      {allCourses}
    </section>
  );
};

export default CoursesPage;
