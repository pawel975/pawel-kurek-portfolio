import Slider from "../Slider/Slider";

const Project = ({key, id, name, images, githubLink, liveVersionLink}) => {
    return (
        <div key={key} id={id} className="project">
            <header>{name}</header>
            <Slider images={images} />
        </div>
    )
}

export default Project;