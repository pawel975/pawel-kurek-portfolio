import "./CoursesPage.scss";
import { useEffect } from "react";
import gsap from "gsap";
import courses from "../../data/courses.ts";
import Course from "../Course/Course.tsx";

const allCourses = courses.map((course) => {
  const { id, name, courseTopics, images, link } = course;

  return (
    <Course
      key={id}
      id={id}
      name={name}
      courseTopics={courseTopics}
      images={images}
      link={link}
    />
  );
});

const CoursesPage = () => {
  useEffect(() => {
    const projectsPageEls = document.querySelector("#courses-page")!.children;

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
