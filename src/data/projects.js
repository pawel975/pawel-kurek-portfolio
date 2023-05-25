import fyHome from "../assets/img/fy-home.png";
import fyFood from "../assets/img/fy-food.png";
import fyMotivation from "../assets/img/fy-motivation.png";
import fyMeasures from "../assets/img/fy-measures.png";
import waHome from "../assets/img/wa-home.png";
import waModal from "../assets/img/wa-modal.png";
import paHome from "../assets/img/pa-home.png";
import paModalSettings from "../assets/img/pa-modal-settings.png";
import paRules from "../assets/img/pa-rules.png";
import paRun from "../assets/img/pa-run.png";
import paStatistics from "../assets/img/pa-statistics.png";
import paThemeChanged from "../assets/img/pa-theme-changed.png";
import paAppearance from "../assets/img/pa-appearance.png";
import ycBlankProject from "../assets/img/yc-blank-project.png";
import ycExampleDrawing from "../assets/img/yc-blank-project.png";
import { AiFillHtml5 as IconHTML } from "react-icons/ai";
import {
  SiJavascript as IconJavaScript,
  SiJest as IconJest,
  SiRedux as IconRedux,
  SiTestinglibrary as IconTestingLibrary,
  SiTypescript as IconTypeScript,
  SiCss3 as IconCSS,
} from "react-icons/si";
import { GrReactjs as IconReact } from "react-icons/gr";
import { DiSass as IconSass } from "react-icons/di";

const projects = [
  {
    id: 1,
    isFinished: true,
    name: "PomodoroApp",
    description:
      "Improve your learning workflow with classical pomodoro method, which divide time onto learning and break session to maximize focus",
    images: [
      paHome,
      paRun,
      paModalSettings,
      paStatistics,
      paRules,
      paAppearance,
      paThemeChanged,
    ],
    techStack: [
      <IconReact />,
      <IconRedux />,
      <IconTestingLibrary />,
      <IconHTML />,
      <IconSass />,
    ],
    githubLink: "https://github.com/pawel975/pomodoro-app.git",
    liveVersionLink: "https://pomodoro-app-blush.vercel.app/",
  },
  {
    id: 2,
    isFinished: true,
    name: "FitYou",
    description: "Track your daily diet based on goals and measures",
    images: [fyHome, fyFood, fyMotivation, fyMeasures],
    techStack: [<IconJavaScript />, <IconJest />, <IconHTML />, <IconSass />],
    githubLink: "https://github.com/pawel975/fit-you.git",
    liveVersionLink: "https://fit-you.vercel.app/",
  },
  {
    id: 3,
    isFinished: true,
    name: "WeatherApp",
    description:
      "Weather app with hours and days forecast, get info about temperature, weather and more details stuff.",
    images: [waHome, waModal],
    techStack: [<IconReact />, <IconRedux />, <IconHTML />, <IconSass />],
    githubLink: "https://github.com/pawel975/weather-app.git",
    liveVersionLink: "https://weather-app-one-lac.vercel.app/",
  },
  {
    id: 4,
    isFinished: false,
    name: "YourCanvas",
    description:
      "Drawing and design app to create graphics in free drawing mode or using templates to generate documents like CV's etc. ",
    images: [ycBlankProject, ycExampleDrawing],
    techStack: [<IconTypeScript />, <IconReact />, <IconHTML />, <IconCSS />],
    githubLink: "https://github.com/pawel975/YourCanvas.git",
    liveVersionLink: "https://your-canvas-l9tecvod7-pawel975.vercel.app",
  },
];

export default projects;
