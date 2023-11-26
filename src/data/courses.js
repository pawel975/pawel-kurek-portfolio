import aspNetCoreCertificate from "../assets/courses/img/course-asp-net-core.jpg";
import csCertificate from "../assets/courses/img/course-cs.jpg";
import jsCertificate from "../assets/courses/img/course-js.jpg";

const courses = [
  {
    id: 1,
    name: "ASP.NET Core",
    description:
      "- RESTful CRUD operations\n" +
      "- Entity Framework Core for database queries\n" +
      "- MS SQL database setup with C#\n" +
      "- Model validation and error handling\n" +
      "- Automatic mapping and dependency injection\n" +
      "- Logging with NLogger\n" +
      "- Swagger documentation\n" +
      "- Postman for API interaction\n" +
      "- User authentication with JWT\n" +
      "- Custom authorization rules\n" +
      "- User and role management\n" +
      "- Password security with hashing\n" +
      "- Authorization based on claims\n" +
      "- Pagination\n" +
      "- CORS policy configuration\n" +
      "- Azure cloud deployment\n",
    image: aspNetCoreCertificate,
    link: "https://www.udemy.com/certificate/UC-19234d21-5100-4750-a465-62287d41205d/",
  },
  {
    id: 2,
    name: "JavaScript",
    description:
      "- Procedural programming in JavaScript\n" +
      "- Object-oriented programming (OOP) principles\n" +
      "- Building solid programming skills through various projects\n" +
      "- Application of JavaScript in front-end development, including layouts and effects\n" +
      "- Preparation for further learning in frameworks like React, Angular, or Vue\n" +
      "- Introduction to back-end development with Node.js\n",
    image: jsCertificate,
    link: "https://www.udemy.com/certificate/UC-f111015c-f5f3-424c-a73e-bf769273c581/",
  },
  {
    id: 3,
    name: "C# .NET",
    description:
      "- Console app development\n" +
      "- Object-oriented principles\n" +
      "- Flow control, collections\n" +
      "- Algorithmic problem-solving, lambdas\n" +
      "- File operations, JSON\n" +
      "- Memory concepts, LINQ basics\n" +
      "- Generic types, async programming\n" +
      "- Data parsing, structures\n" +
      "- Access modifiers, methods\n" +
      "- User interaction, .NET CLI\n",
    image: csCertificate,
    link: "https://www.udemy.com/certificate/UC-402a8be7-505b-4d7f-bf6b-3e178995fe53/",
  },
];

export default courses;
