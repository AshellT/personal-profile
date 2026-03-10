import { SectionWrapper } from "../../hoc";
import { technologies } from "../../constants";

const Tech = () => {
  return (
    <>
      <div className="flex flex-row flex-wrap justify-center gap-10">
        {technologies.map((technology) => (
          <div
            className="group flex h-28 w-28 flex-col items-center justify-center rounded-2xl border border-slate-300/20 bg-slate-900/30 p-3 transition hover:-translate-y-1 hover:border-cyan-300/60"
            key={technology.name}
            title={technology.name}
          >
            <img
              src={technology.icon}
              alt={technology.name}
              loading="lazy"
              decoding="async"
              className="h-12 w-12 object-contain"
            />
            <p className="mt-2 text-center text-[11px] text-slate-200">
              {technology.name}
            </p>
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "tech");
