import CourseInfo from "../CourseInfo/CourseInfo";
import Slider from "../Slider/Slider";
import "./Course.scss";

const Course = ({ key, id, name, courseTopics, image, link }) => {
  return (
    <div key={key} id={id} className="course">
      <Slider
        images={image}
        liveVersionLink={link}
        isFadedBeforeHover={false}
      />
      <CourseInfo name={name} courseTopics={courseTopics} link={link} />
    </div>
  );
};

export default Course;
