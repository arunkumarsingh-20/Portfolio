import React from "react";
import { SkillsInfo } from "../../constants";
import Tilt from "react-parallax-tilt";

const Skills = () => {
  return (
    <section
      id="skills"
      className="px-[12vw] py-24 font-sans bg-skills-gradient clip-path-custom md:px-[7vw] lg:px-[20vw]"
    >
      <div className="mb-14 text-center">
        <p className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-gray-300 backdrop-blur-md">
          Technical toolkit
        </p>
        <h2 className="mt-6 text-4xl font-bold text-white">Skills</h2>
        <div className="mx-auto mt-4 h-1 w-28 bg-[#8245ec]"></div>
        <p className="mx-auto mt-4 max-w-3xl text-lg leading-8 text-gray-400">
          A focused view of the technologies I use to build responsive interfaces,
          modern web apps, and practical solutions.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {SkillsInfo.map((category) => (
          <div
            key={category.title}
            className="rounded-3xl border border-white/10 bg-gray-900/80 p-6 shadow-[0_0_25px_rgba(130,69,236,0.12)] backdrop-blur-md sm:p-8"
          >
            <div className="mb-6 flex items-center justify-between gap-4">
              <div>
                <h3 className="text-2xl font-semibold text-white">
                  {category.title}
                </h3>
                <p className="mt-1 text-sm text-gray-500">
                  Core tools and technologies
                </p>
              </div>

              <span className="rounded-full border border-purple-500/30 bg-purple-500/10 px-3 py-1 text-xs font-medium text-purple-300">
                {category.skills.length} skills
              </span>
            </div>

            <Tilt
              tiltMaxAngleX={12}
              tiltMaxAngleY={12}
              perspective={1000}
              scale={1.02}
              transitionSpeed={900}
              gyroscope={true}
            >
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="min-w-0 rounded-2xl border border-white/10 bg-white/5 px-3 py-3 transition duration-300 hover:-translate-y-0.5 hover:border-purple-500/40 hover:bg-white/10"
                  >
                    <div className="flex flex-col items-center justify-center gap-2 text-center sm:flex-row sm:text-left">
                      <img
                        src={skill.logo}
                        alt={`${skill.name} logo`}
                        className="h-8 w-8 shrink-0 object-contain"
                      />
                      <span className="min-w-0 break-words text-sm font-medium leading-tight text-gray-200">
                        {skill.name}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </Tilt>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
