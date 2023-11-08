import {
  atlassian,
  backend,
  creator,
  css,
  docker,
  elementSuite,
  figma,
  fineDining,
  git,
  github,
  gorillaz,
  gtp3,
  html,
  javascript,
  linkedIn,
  mobile,
  mongodb,
  nintex,
  nodejs,
  pirean,
  reactjs,
  redux,
  roller,
  tailwind,
  threejs,
  typescript,
  web,
} from '../assets';
import { IExperience } from './IExperience';
import { IProject } from './IProject';
import { ITestimonial } from './ITestimonial';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'work',
    title: 'Work',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Web Developer',
    icon: web,
  },
  {
    title: 'React',
    icon: mobile,
  },
  {
    title: 'Angular',
    icon: backend,
  },
  {
    title: 'TypeScript',
    icon: creator,
  },
];

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Redux Toolkit',
    icon: redux,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'MongoDB',
    icon: mongodb,
  },
  {
    name: 'Three JS',
    icon: threejs,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'figma',
    icon: figma,
  },
  {
    name: 'docker',
    icon: docker,
  },
];

const experiences: IExperience[] = [
  {
    title: 'Javascript Developer',
    company_name: 'elementSuite',
    icon: elementSuite,
    iconBg: '#66CAEC',
    date: 'Jan 2017 - Jul 2017',
    points: [
      'Developing and maintaining web applications using Knockout.js and other related technologies.',
      'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
      'Implementing a move to a more agile development process using tools like JIRA for improved task management.',
      'Participating in code reviews and providing constructive feedback to other developers.',
    ],
  },
  {
    title: 'Senior Web Engineer',
    company_name: 'Pirean',
    icon: pirean,
    iconBg: '#006DA6',
    date: 'Aug 2017 - Jan 2021',
    points: [
      'Developing and maintaining web applications using Angular, Nx, NgRx and other related technologies.',
      'Worked on migrating older Angular.JS applications to the latest Angular (v6+).',
      'Worked with the design team to improve design / developer handovers to improve consistency and clarity for both teams.',
      'Participating in code reviews and providing constructive feedback to other developers.',
    ],
  },
  {
    title: 'Web Engineer',
    company_name: 'Nintex',
    icon: nintex,
    iconBg: '#013870',
    date: 'Jan 2021 - Jun 2021',
    points: [
      'Developing and maintaining web applications using Angular and other related technologies.',
      'Worked in a large team cross functional team.',
      'Participating in code reviews and providing constructive feedback to other developers.',
    ],
  },
  {
    title: 'Frontend Software Engineer',
    company_name: 'ROLLER',
    icon: roller,
    iconBg: '#FFFFFF',
    date: 'Sep 2021 - Sep 2023',
    points: [
      'Developing and maintaining web applications using Angular.js / Angular and other related technologies.',
      'Build guidelines and standards for the Frontend discipline.',
      'Implemented a number of features for key products, focusing on reusable components',
      'Participating in code reviews and providing constructive feedback to other developers.',
    ],
  },
  {
    title: 'Senior Frontend Developer',
    company_name: 'Atlassian',
    icon: atlassian,
    iconBg: '#0052CC',
    date: 'Nov 2023 - Present',
    points: [],
  },
];

const testimonials: ITestimonial[] = [
  {
    testimonial:
      'I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.',
    name: 'Sara Lee',
    designation: 'CFO',
    company: 'Acme Co',
    image: 'https://randomuser.me/api/portraits/women/4.jpg',
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: 'Chris Brown',
    designation: 'COO',
    company: 'DEF Corp',
    image: 'https://randomuser.me/api/portraits/men/5.jpg',
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: 'Lisa Wang',
    designation: 'CTO',
    company: '456 Enterprises',
    image: 'https://randomuser.me/api/portraits/women/6.jpg',
  },
];

const projects: IProject[] = [
  {
    name: 'Gorillaz Fan Site',
    description:
      'A community of fans for the band Gorillaz were in desperate need of a new website. I designed and built a modern, mobile friendly website for them based of their needs. Including helpful features and links suggested by the users.',
    tags: [
      {
        name: 'Angular.js',
        color: 'blue-text-gradient',
      },
      {
        name: 'ASP.NET',
        color: 'green-text-gradient',
      },
      {
        name: 'bootstrap',
        color: 'pink-text-gradient',
      },
    ],
    image: gorillaz,
    source_code_link: 'https://github.com/michael-letcher/Gorillaz-Unofficial',
  },
  {
    name: 'GPT 3 Website',
    description: 'GPT 3 company promotional website.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'typescript',
        color: 'green-text-gradient',
      },
      {
        name: 'scss',
        color: 'pink-text-gradient',
      },
      {
        name: 'vite',
        color: 'orange-text-gradient',
      },
    ],
    image: gtp3,
    source_code_link: 'https://github.com/michael-letcher/gpt-3-react',
    live_link: 'https://michaelletcher.com/demo/gpt-3-react',
  },
  {
    name: 'Fine Dining Website',
    description:
      'A restaurant website that allows users to see a menu and operating hours for popular a fine dining experience.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'typescript',
        color: 'green-text-gradient',
      },
      {
        name: 'scss',
        color: 'pink-text-gradient',
      },
      {
        name: 'vite',
        color: 'orange-text-gradient',
      },
    ],
    image: fineDining,
    source_code_link: 'https://github.com/michael-letcher/fine-dining-react',
    live_link: 'https://michaelletcher.com/demo/fine-dining-react',
  },
];

const contacts = [
  {
    name: 'Github',
    link: 'https://github.com/michael-letcher',
    icon: github,
  },
  {
    name: 'LinkedIn',
    link: 'https://www.linkedin.com/in/michaelletcher1/',
    icon: linkedIn,
  },
];

export {
  contacts,
  experiences,
  projects,
  services,
  technologies,
  testimonials,
};
