import "./CourseInfo.scss";
interface CourseInfoInterface {
  name: string;
  courseTopics: string[];
}
const CourseInfo = ({ name, courseTopics }: CourseInfoInterface) => {
  const allTopics = courseTopics.map((topic: any) => (
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
