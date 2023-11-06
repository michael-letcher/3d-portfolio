import { motion } from 'framer-motion';
import { ITestimonial } from '../constants/ITestimonial';
import { fadeIn } from '../utils/motion';

type FeedbackCardProps = {
  testimonial: ITestimonial;
  index: number;
};

const FeedbackCard = ({ testimonial, index }: FeedbackCardProps) => {
  return (
    <motion.div
      variants={fadeIn('', 'spring', index * 0.5, 0.75)}
      className="bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full"
    >
      <p className="text-white font-black text-[48px]">"</p>

      <div className="mt-1">
        <p>{testimonial.testimonial}</p>
        <div className="mt-7 flex justify-between items-center gap-2">
          <div className="flex-1 flex flex-col">
            <p>
              <span>@</span>
              {testimonial.name}
            </p>
            <p>
              {testimonial.designation} of {testimonial.company}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default FeedbackCard;
