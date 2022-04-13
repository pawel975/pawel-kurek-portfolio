import "./LandingPage.scss";
import { IconContext } from "react-icons";
import { FaLaptopCode } from 'react-icons/fa';

const LandingPage = () => {
    return (
        <section id="landing-page">
            <header className="landing-page__welcome-heading">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, accusamus</header>
            <IconContext.Provider value={{className: 'landing-page__logo'}}>
                <FaLaptopCode/>
            </IconContext.Provider>
        </section>
    )
}

export default LandingPage;