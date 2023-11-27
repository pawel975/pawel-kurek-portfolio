import "./NavLink.scss";

const NavLink = ({ text, id }) => {
  return (
    <a className="nav-link" href={`#${id}`}>
      {text}
    </a>
  );
};

export default NavLink;
