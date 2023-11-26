import "./CourseInfo.scss";

const CourseInfo = ({ name, description }) => {
  return (
    <div className="course-info">
      <header>{name}</header>
      <p className="description">{description}</p>
    </div>
  );
};

export default CourseInfo;
