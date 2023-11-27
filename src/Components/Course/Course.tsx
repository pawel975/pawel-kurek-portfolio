import CourseInfo from "../CourseInfo/CourseInfo.tsx";
import Slider from "../Slider/Slider.tsx";
import "./Course.scss";

interface CourseInterface {
  key: number;
  id: number;
  name: string;
  courseTopics: string[];
  images: string[];
  link: string;
}

const Course = ({
  key,
  id,
  name,
  courseTopics,
  images,
  link,
}: CourseInterface) => {
  return (
    <div key={key} id={id as unknown as string} className="course">
      <Slider
        images={images}
        liveVersionLink={link}
        isFadedBeforeHover={false}
      />
      <CourseInfo name={name} courseTopics={courseTopics} />
    </div>
  );
};

export default Course;
