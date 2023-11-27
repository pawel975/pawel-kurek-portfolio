import { useEffect, useState } from "react";
import "./Footer.scss";
import { AiFillGithub as GithubIcon } from "react-icons/ai";
import { MdEmail as MailIcon } from "react-icons/md";
import { BsLinkedin as LinkedInIcon } from "react-icons/bs";
import PopupMessage from "../PopupMessage/PopupMessage.tsx";
import gsap from "gsap";

const Footer = () => {
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const copyToClipboard = () => {
    const copiedText = "pawel.kurek975@gmail.com";
    navigator.clipboard.writeText(copiedText);

    setIsPopupVisible(true);
    setTimeout(() => setIsPopupVisible(false), 3000);
  };

  useEffect(() => {
    gsap.from(".contact-header", {
      scrollTrigger: {
        trigger: ".contact-header",
        toggleActions: "play none none none",
      },
      duration: 1,
      y: "-50",
      opacity: 0,
    });

    const contactEls = document.querySelector(".contact-links")!.children;

    gsap.from(contactEls, {
      scrollTrigger: {
        trigger: contactEls,
        toggleActions: "play none none none",
      },
      duration: 1,
      x: "+50",
      opacity: 0,
    });
  }, []);

  return (
    <footer id="contact">
      <header className="contact-header">
        <h2>Contact me</h2>
      </header>
      <div className="contact-links">
        <div className="contact-link-wrapper">
          <button onClick={copyToClipboard} className="copy-email">
            <MailIcon className="contact-link-icon" />
            <p className="contact-link-description">pawel.kurek975@gmail.com</p>
          </button>
        </div>
        <div className="contact-link-wrapper">
          <a
            href="https://github.com/pawel975"
            target="_blank"
            rel="noreferrer"
            className="github-link"
          >
            <GithubIcon className="contact-link-icon" />
            <p className="contact-link-description">pawel975</p>
          </a>
        </div>
        <div className="contact-link-wrapper">
          <a
            href="https://www.linkedin.com/in/pawe%C5%82-kurek-7aab5424b/"
            target="_blank"
            rel="noreferrer"
            className="linkedin-link"
          >
            <LinkedInIcon className="contact-link-icon" />
            <p className="contact-link-description">Paweł Kurek</p>
          </a>
        </div>
      </div>
      {isPopupVisible && <PopupMessage text={"e-mail copied to clipboard"} />}
    </footer>
  );
};

export default Footer;
