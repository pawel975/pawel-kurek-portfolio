import './About.scss';
import {GoGear as MechanicsIcon} from 'react-icons/go'
import gsap from 'gsap';
import { useEffect } from 'react';

const About = () => {

    useEffect(()=> {

        const aboutPageBiographyEls = document.querySelector(".about-page__biography").children

        gsap.from(aboutPageBiographyEls, {
            scrollTrigger: {
                trigger: aboutPageBiographyEls,
                toggleActions: "play none none none"
            },
            duration: 1,
            opacity:0,
            x: '-200',
            stagger: 0.15,
        })

        gsap.from('.about-page__icon', {
            scrollTrigger: {
                trigger: '.about-page__icon',
                toggleActions: "play none none none"
            },
            duration: 1.45,
            rotate: '360',
        })

    })

    return (
        <section id='about-page'>
            <header className='about-page__biography'>
                <h2>About me</h2>

                <p>I graduated <strong>mechanical engineering</strong> at <strong>Politechnika bydgoska</strong>. I have <strong>5 years</strong> of experience as a <strong>plotter CNC operator</strong>, and for last <strong>3 years</strong> I'm also <strong>leader</strong> of my department.</p> 
                
                <p>I'm about to switch my career into programming. I created multiple personal projects of my own ideas and few based on challenges from <a target='_blank' href='https://www.frontendmentor.io/profile/pawel975' rel="noreferrer">FrontendMentor.io</a> & tutorials</p>

                <p>I'm eager to get new knowledge and I hope that your company will provide it for me!</p>
                
            </header>
            <MechanicsIcon className='about-page__icon'/>
        </section>
    )
}

export default About;