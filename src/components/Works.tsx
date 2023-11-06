import { motion } from 'framer-motion';
import { projects } from '../constants';
import SectionWrapper from '../layout/SectionWrapper';
import { styles } from '../styles';
import { textVariant } from '../utils/motion';
import ProjectCard from './ProjectCard';

const WorksComponent = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My projects</p>
        <h2 className={styles.sectionHeadText}>Projects</h2>
      </motion.div>

      <div className="w-full ">
        <motion.p className="mt-3 text-secondary text-[16px] max-w-3xl leading-[30px]">
          Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos (if available). It reflects
          my ability to solve complex problems, work with different technologies
          and teams.
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard
            key={`project-${index}`}
            project={project}
            index={index}
          />
        ))}
      </div>
    </>
  );
};

const Work = SectionWrapper(WorksComponent, 'work');
export default Work;
