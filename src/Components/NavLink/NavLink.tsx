import "./NavLink.scss";
interface NavLinkInterface {
  text: string;
  id: string;
}
const NavLink = ({ text, id }: NavLinkInterface) => {
  return (
    <a className="nav-link" href={`#${id}`}>
      {text}
    </a>
  );
};

export default NavLink;
