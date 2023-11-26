import "./CourseInfo.scss";

const CourseInfo = ({ name, courseTopics }) => {
  const allTopics = courseTopics.map((topic) => (
    <li className="topic">{topic}</li>
  ));
  return (
    <div className="course-info">
      <header>{name}</header>
      <ul>{allTopics}</ul>
    </div>
  );
};

export default CourseInfo;
