import NavLink from '../NavLink/NavLink';
import './Nav.scss';

const Nav = () => {
    return (
        <nav>
            <NavLink id="landing-page" text={"Home"}/>
            <NavLink id="projects-page" text={"Projects"}/>
        </nav>
    )
}

export default Nav;