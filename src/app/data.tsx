import { v4 as uuid } from 'uuid';
import { NavLinkType, ProjectType, SkillsType } from './utils/type';
import { FaHtml5, FaCss3, FaJs, FaNodeJs, FaJava } from "react-icons/fa";
import { SiTailwindcss, SiTypescript, SiNextdotjs, SiExpress } from "react-icons/si";
export const links: NavLinkType[] = [
  { id: uuid(), href: "#home", text: "home" },
  { id: uuid(), href: "#skills", text: "skills" },
  { id: uuid(), href: "#about", text: "about" },
  { id: uuid(), href: "#projects", text: "projects" }
]

export const skills: SkillsType[] = [
  { id: uuid(), title: "HTML & CSS", text: "Good undertanding of HTML & CSS.", icon: <FaHtml5 className="h-16 w-16 text-secondary-dark" /> },
  { id: uuid(), title: "Tailwind CSS", text: "Well familiar with Tailwind css.", icon: <SiTailwindcss className="h-16 w-16 text-secondary-dark" /> },
  { id: uuid(), title: "Javascript", text: "Took an entire class on vanilla js alone.", icon: <FaJs className="h-16 w-16 text-secondary-dark" /> },
  { id: uuid(), title: "Java", text: "Familiar with Java on basic level and OOP principles like Abstraction,encapsulation, inheritance and polymorphism.", icon: <FaJava className="h-16 w-16 text-secondary-dark" /> },
  { id: uuid(), title: "Java", text: "Worked with typescript in React and Nextjs.", icon: <SiTypescript className="h-16 w-16 text-secondary-dark" /> },
  { id: uuid(), title: "Nodejs", text: "Basic understanding of node js modules.", icon: <FaNodeJs className="h-16 w-16 text-secondary-dark" /> },
  { id: uuid(), title: "Express", text: "CRUD apps in Express.js.", icon: <SiExpress className="h-16 w-16 text-secondary-dark" /> }
]

export const projects: ProjectType[] = [
  { id: uuid(), img: "https://images.pexels.com/photos/17266857/pexels-photo-17266857/free-photo-of-vase-with-flowers-and-cup-of-coffee.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", url: "https://github.com/sirsa4", github: "https://github.com/sirsa4", title: "Project one", text: "Project one text" },
  { id: uuid(), img: "https://images.pexels.com/photos/17266857/pexels-photo-17266857/free-photo-of-vase-with-flowers-and-cup-of-coffee.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", url: "https://github.com/sirsa4", github: "https://github.com/sirsa4", title: "Project two", text: "Project two text" },
  { id: uuid(), img: "https://images.pexels.com/photos/17266857/pexels-photo-17266857/free-photo-of-vase-with-flowers-and-cup-of-coffee.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", url: "https://github.com/sirsa4", github: "https://github.com/sirsa4", title: "Project three", text: "Project three text" }

];
