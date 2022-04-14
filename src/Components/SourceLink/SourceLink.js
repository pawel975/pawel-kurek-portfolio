import "./SourceLink.scss";

const SourceLink = ({link, name}) => {
    return (
        <a target="_blank" href={link} className="source-link" rel="noreferrer">{name}</a>
    );
};

export default SourceLink;
