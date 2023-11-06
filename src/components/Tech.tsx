import { BallCanvas } from '.';
import { technologies } from '../constants';
import SectionWrapper from '../layout/SectionWrapper';

const TechComponent = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">
      {technologies.map((technology) => (
        <div className="w-28 h-28" key={technology.name}>
          <BallCanvas icon={technology.icon} />
        </div>
      ))}
    </div>
  );
};

const Tech = SectionWrapper(TechComponent);
export default Tech;
