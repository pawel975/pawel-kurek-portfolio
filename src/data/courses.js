import aspNetCoreCertificate from "../assets/courses/img/course-asp-net-core.jpg";
import csCertificate from "../assets/courses/img/course-cs.jpg";
import jsCertificate from "../assets/courses/img/course-js.jpg";

const courses = [
  {
    id: 1,
    name: "ASP.NET Core",
    courseTopics: [
      "RESTful CRUD operations",
      "Entity Framework Core for database queries",
      "MS SQL database setup with C#",
      "Model validation and error handling",
      "Automatic mapping and dependency injection",
      "Logging with NLogger",
      "Swagger documentation",
      "Postman for API interaction",
      "User authentication with JWT",
      "Custom authorization rules",
      "User and role management",
      "Password security with hashing",
      "Authorization based on claims",
      "Pagination",
      "CORS policy configuration",
      "Azure cloud deployment\n",
    ],
    image: aspNetCoreCertificate,
    link: "https://www.udemy.com/certificate/UC-19234d21-5100-4750-a465-62287d41205d/",
  },
  {
    id: 2,
    name: "JavaScript",
    courseTopics: [
      "Procedural programming in JavaScript",
      "Object-oriented programming (OOP) principles",
      "Building solid programming skills through various projects",
      "Application of JavaScript in front-end development, including layouts and effects",
      "Preparation for further learning in frameworks like React, Angular, or Vue",
      "Introduction to back-end development with Node.js\n",
    ],
    image: jsCertificate,
    link: "https://www.udemy.com/certificate/UC-f111015c-f5f3-424c-a73e-bf769273c581/",
  },
  {
    id: 3,
    name: "C# .NET",
    courseTopics: [
      "Console app development",
      "Object-oriented principles",
      "Flow control, collections",
      "Algorithmic problem-solving, lambdas",
      "File operations, JSON",
      "Memory concepts, LINQ basics",
      "Generic types, async programming",
      "Data parsing, structures",
      "Access modifiers, methods",
      "User interaction, .NET CLI\n",
    ],
    image: csCertificate,
    link: "https://www.udemy.com/certificate/UC-402a8be7-505b-4d7f-bf6b-3e178995fe53/",
  },
];

export default courses;
