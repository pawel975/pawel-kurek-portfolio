import "./About.scss";
import { GoGear as MechanicsIcon } from "react-icons/go";
import gsap from "gsap";
import { useEffect } from "react";

const About = () => {
  useEffect(() => {
    const aboutPageBiographyEls = document.querySelector(".about-page__biography")!.children;

    gsap.from(aboutPageBiographyEls, {
      scrollTrigger: {
        trigger: aboutPageBiographyEls,
        toggleActions: "play none none none",
      },
      duration: 1,
      opacity: 0,
      x: "-50",
      stagger: 0.15,
    });

    gsap.from(".about-page__icon", {
      scrollTrigger: {
        trigger: ".about-page__icon",
        toggleActions: "play none none none",
      },
      duration: 1.45,
      rotate: "360",
    });
  });

  const getYearsOfExperience = () => {
    return Math.floor((Date.now() - Date.parse("2017-01-23")) / 1000 / 60 / 60 / 24 / 365.25);
  };

  return (
    <section id="about-page">
      <header className="about-page__biography">
        <h2>About me</h2>

        <p>
          I graduated <strong>mechanical engineering</strong> at
          <strong> Politechnika bydgoska</strong>. I have
          <strong>{" " + getYearsOfExperience()} years</strong> of experience as a <strong>plotter CNC operator</strong>
          , and for last
          <strong>{" " + (getYearsOfExperience() - 2)} years</strong> I'm also
          <strong> leader</strong> of my department.
        </p>

        <p>
          I am currently a <strong>C# developer</strong> working on webservices using <strong>ASP.NET Core</strong> and
          desktop applications in <strong>Windows Forms</strong>.
        </p>
      </header>
      <MechanicsIcon className="about-page__icon" />
    </section>
  );
};

export default About;
