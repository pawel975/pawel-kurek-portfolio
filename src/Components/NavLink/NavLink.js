import './NavLink.scss';

const NavLink = ({text, id}) => {
    return (
        <a href={`#${id}`}>{text}</a>
    )
}

export default NavLink;