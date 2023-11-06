import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import { services } from '../constants';
import SectionWrapper from '../layout/SectionWrapper';
import { styles } from '../styles';
import { fadeIn, textVariant } from '../utils/motion';

interface ServiceCardProps {
  index: number;
  title: string;
  icon: string;
}

const ServiceCard = ({ index, title, icon }: ServiceCardProps) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn('right', 'spring', 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
          options={{ max: 45, scale: 1, speed: 450 }}
        >
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />

          <h3 className="text-white text-[20px] font-bold text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const AboutComponent = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>

      <motion.p
        variants={fadeIn('', '', 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30xp]"
      >
        With attention for detail and quality of design; I bring a push for
        modern and feature rich user experiences. I have an enthusiastic
        approach to problem solving, improving development processes and
        creating products that are modular and scalable. I specialise in Web
        Application (SPA) development. Using technologies such as Angular, React
        and more.
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            index={index}
            title={service.title}
            icon={service.icon}
          ></ServiceCard>
        ))}
      </div>
    </>
  );
};

const About = SectionWrapper(AboutComponent, 'about');
export default About;
