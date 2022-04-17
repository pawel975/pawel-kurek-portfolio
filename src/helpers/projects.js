import fyHome from '../assets/img/fy-home.png';
import fyFood from '../assets/img/fy-food.png';
import fyMotivation from '../assets/img/fy-motivation.png';
import fyMeasures from '../assets/img/fy-measures.png';
import waHome from '../assets/img/wa-home.png';
import waModal from '../assets/img/wa-modal.png';
import {AiFillHtml5} from 'react-icons/ai';
import {SiJavascript, SiJest, SiRedux} from 'react-icons/si';
import {GrReactjs} from 'react-icons/gr';
import {DiSass} from 'react-icons/di';

const projects = [
    {
        id: 1,
        name: 'FitYou',
        description: "Track your daily diet based on goals and measures",
        images: [
            fyHome,
            fyFood,
            fyMotivation,
            fyMeasures
        ],
        techStack: [
            <SiJavascript/>,
            <SiJest/>,
            <AiFillHtml5/>,
            <DiSass/>,
        ],
        githubLink: 'https://github.com/pawel975/fit-you.git',
        liveVersionLink: 'https://fit-you.vercel.app/',

    },
    {
        id: 1,  
        name: 'WeatherApp',
        description: "Weather app with hours and days forecast, get info about temperature, weather and more details stuff.",
        images: [
            waHome,
            waModal
        ],
        techStack: [
            <GrReactjs/>,
            <SiRedux/>,
            <AiFillHtml5/>,
            <DiSass/>,
        ],
        githubLink: 'https://github.com/pawel975/weather-app.git',
        liveVersionLink: 'https://weather-app-one-lac.vercel.app/',

    }
]

export default projects;