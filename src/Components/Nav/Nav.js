import NavButton from '../NavButton/NavButtons';
import './Nav.scss';

const Nav = () => {
    return (
        <nav>
            <a href="#landing-page">
                <NavButton text={"Home"}/>
            </a>
            <a href="#projects-page">
                <NavButton text={"Projects"}/>
            </a>
        </nav>
    )
}

export default Nav;