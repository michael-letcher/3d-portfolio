import { motion } from 'framer-motion';
import ReactParallaxTilt from 'react-parallax-tilt';
import { github } from '../assets';
import { IProject } from '../constants/IProject';
import { fadeIn } from '../utils/motion';

type ProjectCardProps = {
  project: IProject;
  index: number;
};

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  return (
    <motion.div variants={fadeIn('up', 'spring', index * 0.5, 0.75)}>
      <ReactParallaxTilt
        scale={1}
        transitionSpeed={450}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
      >
        <div className="relative w-full h-[230px]">
          <img
            src={project.image}
            alt={project.name}
            className="w-full h-full object-cover rounded-2xl"
          />

          <div className="absolute inset-0 flex justify-end m-3 card-img_hover gap-4">
            <a
              href={project.source_code_link}
              target="_blank"
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img
                src={github}
                alt="github"
                className="w-3/4 h-3/4 object-contain"
              />
            </a>
            {project.live_link && (
              <a
                href={project.live_link}
                target="_blank"
                className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer bg-black-100"
              >
                🚀
              </a>
            )}
          </div>
        </div>

        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{project.name}</h3>
          <p className="mt-4 text-secondary text-[14px]">
            {project.description}
          </p>
        </div>

        <ul className="mt-5 list-none flex flex-wrap gap-4">
          {project.tags.map((tag) => (
            <li key={tag.name} className={`text-[14px] ${tag.color}`}>
              #{tag.name}
            </li>
          ))}
        </ul>
      </ReactParallaxTilt>
    </motion.div>
  );
};

export default ProjectCard;
