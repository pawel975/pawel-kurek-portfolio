import "./LandingPage.scss";
import { FaLaptopCode } from 'react-icons/fa';
import { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/src/ScrollTrigger";

const LandingPage = () => {

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        const tl = gsap.timeline();
        const heading = document.querySelector(".landing-page__welcome-heading")

        tl.from(heading.children, {
            scrollTrigger: {
                trigger: heading,
                start:"bottom top",
                end: "+200",
                markers: {
                    startColor: 'red',
                    endColor: "salmon"
                },
                toggleActions: 'restart'
            },
            duration: 1, 
            opacity:0, 
            x: '-200',
            // stagger: 0.3,
        })

        // tl.from('.landing-page__logo', {
        //     duration: 1, 
        //     opacity:0, 
        //     y: '-200',
        // })

    }, [])

    return (
        <section id="landing-page">
            <header className="landing-page__welcome-heading">
                <h1>Hi, I'm <span>Paweł</span></h1>
                <p>I want to become a</p>
                <p>Frontend developer</p>
            </header>
            <FaLaptopCode className='landing-page__logo'/>
        </section>
    )
}
export default LandingPage;
