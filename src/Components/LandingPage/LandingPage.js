import "./LandingPage.scss";
import { FaLaptopCode } from 'react-icons/fa';

const LandingPage = () => {
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
