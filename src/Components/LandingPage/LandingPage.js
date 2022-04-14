import "./LandingPage.scss";
import { IconContext } from "react-icons";
import { FaLaptopCode } from 'react-icons/fa';

const LandingPage = () => {
    return (
        <section id="landing-page">
            <header className="landing-page__welcome-heading">
                <h1>Hi, I'm <span>Paweł</span></h1>
                    I want to become frontend developer</header>
            <IconContext.Provider value={{className: 'landing-page__logo'}}>
                <FaLaptopCode/>
            </IconContext.Provider>
        </section>
    )
}

export default LandingPage;