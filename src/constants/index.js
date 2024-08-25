import YoutubeClone from "../assets/projects/youtubeclone.png";
import CodeEditor from "../assets/projects/codeEditor.png";
import DiceGame from "../assets/projects/diceGame.png";
import eshop from "../assets/projects/eshop.png";

export const HERO_CONTENT = `I’m a Frontend Developer with expertise in HTML, CSS, JavaScript, and ReactJS. I’ve built responsive and dynamic web applications, including e-commerce platforms and YouTube clones. I focus on creating seamless user experiences with clean, efficient code, leveraging modern tools like Tailwind CSS, Vite, and Firebase. My goal is to deliver high-quality, intuitive interfaces that work flawlessly across all devices.`;

export const ABOUT_TEXT = `I'm a Frontend Developer with a strong command of JavaScript, React.js, Redux-ToolKit, and React Router DOM. I've developed responsive web applications using Tailwind CSS, Material UI, and Vite, with experience in backend technologies like Node.js, Express.js, SQL, and MySQL. My projects range from an e-commerce platform with Razorpay integration to a YouTube clone leveraging RapidAPI. I’m proficient in Git & GitHub for version control and have worked on a major website revamp for Balaji Group Khandwa, focusing on creating a modern, responsive design. My goal is to deliver high-quality, user-centric web solutions.`;

export const EXPERIENCES = [
  {
    year: "Apr 2024 - Jun 2024",
    role: "Web Developer",
    company: "BalajiGroup",
    description: ` Worked as full stack developer, revamped the whole website
(balajigroup.com), and gave it a new "look and feel" with fully responsive and custom-designed
pages. Being a Node.js project, used Express.js to create the server and routes for pages.
Generated reusable markup templates using EJS. Used MongoDB, and Mongoose for the
database. 
`,
    technologies: [
      "Javascript",
      "React.js",
      "CSS",
      "mongoDB",
      "node.js",
      "Express.js",
    ],
  },

  {
    year: "Dec-2023",
    role: "Frontend Developer",
    company: "Money Arjan Solutions ",
    description: `Worked as a front-end developer. Developed the whole
website (moneyarjan.com) of the agency using the combo of HTML Themes, Custom CSS, and
JavaScript for faster and elegant results. Being a Static Site, I hosted it on Github and published
it through Netlify. Used Netlify Forms to get user submissions without worrying about backend.`,
    technologies: ["HTML", "CSS", "Javascript", "git & Github", "Netlify"],
  },
];

export const PROJECTS = [
  {
    title: "E-Shop Website",
    image: eshop,
    description:
      "A fully functional e-commerce website with features like product listing, shopping cart, and user authentication.",
    technologies: ["React", "Redux", "React-Router", "ContextApi", "firebase"],
    demo: "https://e-shope-theta.vercel.app/",
    code: "https://github.com/ANKIT-MANDLOI-17/E-Shop",
  },
  {
    title: "Youtube Clone",
    image: YoutubeClone,
    description: `YouTube clone using ReactJS, responsive user interface with a sidebar for easy navigation between different categories like "New," "JS Mastery," "Coding," "ReactJS," and more. The app allows users to browse videos in various genres, with a search bar at the top for quick access. The design is visually appealing, utilizing a dark theme with vibrant accent colors, and it effectively mimics the look and feel of the real YouTube platform.`,
    technologies: [
      "React",
      "Redux",
      "React-Router",
      "RapidApi",
      "firebase",
      "TailWind Css",
      "Material UI",
    ],
    demo: "https://youtube-clone-one-pied.vercel.app/",
    code: "https://github.com/ANKIT-MANDLOI-17/Youtube-Clone",
  },

  {
    title: "Code Editor",
    image: CodeEditor,
    description:
      "Code Editor that allows users to write and edit HTML, CSS, and JavaScript code in separate panels and view the output in real-time. The interface is clean and organized, making it easy to see how the code affects the output immediately. This tool is ideal for quickly testing and learning web development concepts.",
    technologies: ["React", "Firebase", "Tailwind CSS", "LocalStorage"],
    demo: "https://code-pen-clone-three.vercel.app/",
    code: "https://github.com/ANKIT-MANDLOI-17/CodePen-Clone",
  },
  {
    title: "Dice Game",
    image: DiceGame,
    description:
      "The game allows users to select a number and roll a virtual dice. If the selected number matches the dice roll, the player earns points equal to the dice number; if the guess is incorrect, 2 points are deducted. The interface is clean and straightforward, featuring a score tracker, a reset button, and clear instructions on how to play.",
    technologies: ["HTML", "CSS", "Javascript", "react"],
    demo: "https://dice-game-react-teal.vercel.app/",
    code: "https://github.com/ANKIT-MANDLOI-17/DiceGame-react",
  },
];

export const CONTACT = {
  address: "Khandwa , Madhya Pradesh , India",
  phoneNo: "+91 81034 61938",
  email: "ankitmandloi92425@gmail.com",
};
