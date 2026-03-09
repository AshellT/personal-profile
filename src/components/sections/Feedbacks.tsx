import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../../constants/styles";
import { testimonials } from "../../constants";
import { Header } from "../atoms/Header";
import { TTestimonial } from "../../types";
import { config } from "../../constants/config";

const FeedbackCard: React.FC<TTestimonial> = ({
  testimonial,
  name,
  designation,
  company,
  image,
}) => (
  <Tilt
    tiltEnable
    glareEnable
    tiltMaxAngleX={18}
    tiltMaxAngleY={18}
    glareColor="#e0f2fe"
    className="h-full w-full"
  >
    <div className="bg-black-200 aspect-square w-full rounded-2xl border border-slate-400/20 p-4">
      <p className="text-[32px] font-black text-white">"</p>

      <div className="mt-1 flex h-[calc(100%-44px)] flex-col justify-between">
        <p className="line-clamp-5 text-[13px] tracking-wide text-white">{testimonial}</p>

        <div className="mt-4 flex items-center justify-between gap-2">
          <div className="flex flex-1 flex-col">
            <p className="headline-font text-[13px] font-medium text-white">
              <span className="blue-text-gradient">@</span> {name}
            </p>
            <p className="text-secondary mt-1 text-[11px]">
              {designation} of {company}
            </p>
          </div>

          <img
            src={image}
            alt={`feedback_by-${name}`}
            className="h-8 w-8 rounded-full object-cover"
          />
        </div>
      </div>
    </div>
  </Tilt>
);

const Feedbacks = () => {
  const scrollingCertifications = [...testimonials, ...testimonials];

  return (
    <div className="bg-black-100 mt-12 rounded-[20px] border border-slate-400/15">
      <div className="mx-auto max-w-7xl">
        <div
          className={`${styles.padding} bg-tertiary min-h-[300px] rounded-2xl`}
        >
          <Header useMotion={true} {...config.sections.feedbacks} />
        </div>
        <div className={`${styles.paddingX} -mt-20 overflow-hidden pb-14`}>
          <motion.div
            className="flex w-max gap-4"
            animate={{ x: ["-50%", "0%"] }}
            transition={{ duration: 38, repeat: Infinity, ease: "linear" }}
          >
            {scrollingCertifications.map((testimonial, index) => (
              <div
                key={`${testimonial.name}-${index}`}
                className="w-[180px] shrink-0 sm:w-[200px] lg:w-[220px]"
              >
                <FeedbackCard {...testimonial} />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Feedbacks;
