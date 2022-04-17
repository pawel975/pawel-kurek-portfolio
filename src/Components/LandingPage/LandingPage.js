import "./LandingPage.scss";
import { FaLaptopCode as LaptopIcon } from 'react-icons/fa';
import { useEffect } from "react";
import gsap from "gsap";

const LandingPage = () => {

    useEffect(() => {

        // Animate heading
        gsap.from(".landing-page__welcome-heading", {
            scrollTrigger: {
                trigger: ".landing-page__welcome-heading",
                toggleActions: 'restart none restart none'
            },
            duration: 1, 
            opacity:0, 
            x: '-200',
            stagger: 0.3,
        })

        // Animate icon
        gsap.from('.landing-page__logo', {
            scrollTrigger: {
                trigger: '.landing-page__logo',
                toggleActions: 'restart none restart none'
            },
            duration: 1, 
            opacity:0, 
            y: '200',
        })

    }, [])

    return (
        <section id="landing-page">
            <header className="landing-page__welcome-heading">
                <h1>Hi, I'm <span>Paweł</span></h1>
                <p>I want to become a</p>
                <p>Frontend developer</p>
            </header>
            <LaptopIcon className='landing-page__logo'/>
        </section>
    )
}
export default LandingPage;
