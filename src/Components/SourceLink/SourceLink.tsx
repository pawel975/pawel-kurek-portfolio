import "./SourceLink.scss";

interface SourceLinkInterface {
  link: string;
  name: string;
}

const SourceLink = ({ link, name }: SourceLinkInterface) => {
  return (
    <a target="_blank" href={link} className="source-link" rel="noreferrer">
      {name}
    </a>
  );
};

export default SourceLink;
