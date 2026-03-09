import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css";

import { experiences } from "../../constants";
import { SectionWrapper } from "../../hoc";
import { Header } from "../atoms/Header";
import { TExperience } from "../../types";
import { config } from "../../constants/config";

const ExperienceCard: React.FC<TExperience> = (experience) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background:
          "linear-gradient(145deg, rgba(8,22,40,0.96) 0%, rgba(10,31,56,0.96) 45%, rgba(9,41,74,0.95) 100%)",
        color: "#fff",
        border: "1px solid rgba(34, 211, 238, 0.28)",
        borderRadius: "16px",
        backdropFilter: "blur(6px)",
        boxShadow:
          "0 26px 50px -26px rgba(2, 12, 28, 0.95), 0 0 0 1px rgba(103, 232, 249, 0.16) inset, 0 0 24px -10px rgba(34, 211, 238, 0.65)",
      }}
      contentArrowStyle={{ borderRight: "7px solid rgba(11, 43, 78, 0.95)" }}
      date={experience.date}
      iconStyle={{
        background: experience.iconBg,
        border: "2px solid rgba(255, 255, 255, 0.9)",
        boxShadow:
          "0 12px 28px -10px rgba(8, 22, 39, 0.75), 0 0 22px -8px rgba(34, 211, 238, 0.65)",
      }}
      icon={
        <div className="flex h-full w-full items-center justify-center rounded-full bg-white/90 shadow-[0_0_24px_-10px_rgba(34,211,238,0.9)]">
          <img
            src={experience.icon}
            alt={experience.companyName}
            className="h-[58%] w-[58%] object-contain"
          />
        </div>
      }
    >
      <div className="relative overflow-hidden">
        <span className="pointer-events-none absolute -top-6 right-0 h-20 w-20 rounded-full bg-cyan-300/15 blur-2xl" />
        <h3 className="headline-font text-[24px] font-bold text-white">{experience.title}</h3>
        <p
          className="text-[16px] font-semibold text-cyan-100/90"
          style={{ margin: 0 }}
        >
          {experience.companyName}
        </p>
      </div>

      <ul className="ml-5 mt-5 list-disc space-y-2 marker:text-cyan-300">
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className="pl-1 text-[14px] tracking-wider text-slate-100"
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <>
      <Header useMotion={true} {...config.sections.experience} />

      <div className="mt-20 flex flex-col">
        <VerticalTimeline lineColor="rgba(34, 211, 238, 0.55)">
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} {...experience} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");
