import CourseInfo from "../CourseInfo/CourseInfo.tsx";
import Slider from "../Slider/Slider.tsx";
import "./Course.scss";

const Course = ({ key, id, name, courseTopics, image, link }: any) => {
  return (
    <div key={key} id={id} className="course">
      <Slider
        images={image}
        liveVersionLink={link}
        isFadedBeforeHover={false}
      />
      <CourseInfo name={name} courseTopics={courseTopics} />
    </div>
  );
};

export default Course;
