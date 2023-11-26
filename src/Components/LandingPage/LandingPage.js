import "./LandingPage.scss";
import { useEffect } from "react";
import gsap from "gsap";
import countapi from "countapi-js";
import photo from "../../assets/img/my-photo.jpg";

const LandingPage = () => {
  useEffect(() => {
    countapi.visits("global").then((result) => {
      console.log(result.value);
    });

    // Animate heading
    gsap.from(".landing-page__welcome-heading", {
      scrollTrigger: {
        trigger: ".landing-page__welcome-heading",
        toggleActions: "play none none none",
      },
      duration: 1,
      opacity: 0,
      x: "-50",
      stagger: 0.3,
    });

    // Animate icon
    gsap.from(".landing-page__my-photo-container", {
      scrollTrigger: {
        trigger: ".landing-page__my-photo-container",
        toggleActions: "play none none none",
      },
      duration: 1,
      opacity: 0,
      y: "50",
    });
  }, []);

  return (
    <section id="landing-page">
      <header className="landing-page__welcome-heading">
        <h1>
          Hello, I'm <span>Paweł</span>
        </h1>
        <p>Welcome to my portfolio</p>
      </header>
      <div className="landing-page__my-photo-container">
        <img src={photo} alt="Paweł Kurek" />
      </div>
    </section>
  );
};
export default LandingPage;
