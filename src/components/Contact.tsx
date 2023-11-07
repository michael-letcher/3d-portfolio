import { motion } from 'framer-motion';
import { EarthCanvas } from '.';
import { contacts } from '../constants';
import SectionWrapper from '../layout/SectionWrapper';
import { styles } from '../styles';
import { slideIn } from '../utils/motion';

const ContactComponent = () => {
  return (
    <div className="xl:t-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden min-h-[400px]">
      <motion.div
        variants={slideIn('left', 'tween', 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h2 className={styles.sectionHeadText}>Contact</h2>

        <ul className="mt-10 flex xl:flex-row flex-col gap-7">
          {contacts.map((contact) => (
            <li key={contact.name}>
              <a href={contact.link} target="_blank">
                <img
                  src={contact.icon}
                  alt={contact.name}
                  className="w-20 h-20 rounded-full object-cover"
                />
              </a>
            </li>
          ))}
        </ul>
      </motion.div>

      <motion.div
        variants={slideIn('right', 'tween', 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

const Contact = SectionWrapper(ContactComponent, 'contact');
export default Contact;
