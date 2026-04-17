import React from "react";
import { education } from "../../constants";

const Education = () => {
  return (
    <section
      id="education"
      className="px-[8vw] md:px-[6vw] lg:px-[16vw] py-24 font-sans bg-skills-gradient clip-path-custom-3"
    >
      <div className="text-center mb-16">
        <p className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-gray-300 backdrop-blur-md">
          Academic background
        </p>
        <h2 className="mt-6 text-4xl font-bold text-white">Education</h2>
        <div className="mx-auto mt-4 h-1 w-28 bg-purple-500"></div>
        <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-gray-300">
          My academic journey has strengthened my problem-solving mindset and
          given me a solid base in both electronics and software development.
        </p>
      </div>

      <div className="relative">
        <div className="absolute left-6 top-0 h-full w-1 -translate-x-1/2 bg-gradient-to-b from-purple-500 via-white/80 to-purple-500 sm:left-1/2"></div>

        <div className="grid gap-16">
          {education.map((edu, index) => {
            const isLeft = index % 2 === 0;

            return (
              <div
                key={edu.id}
                className={`relative flex flex-col items-start sm:flex-row sm:items-center ${
                  isLeft ? "sm:justify-start" : "sm:justify-end"
                }`}
              >
                <div className="absolute left-6 top-8 h-5 w-5 -translate-x-1/2 rounded-full border-4 border-[#050414] bg-purple-500 shadow-[0_0_16px_rgba(130,69,236,0.8)] sm:left-1/2 sm:top-1/2"></div>

                <div
                  className={`mt-10 w-full rounded-3xl border border-white/10 bg-gray-900/80 p-6 backdrop-blur-md shadow-[0_0_25px_rgba(130,69,236,0.15)] transition-transform duration-300 hover:-translate-y-1 sm:mt-0 sm:max-w-xl sm:p-8 ${
                    isLeft ? "sm:ml-14" : "sm:mr-14"
                  }`}
                >
                  <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
                    <div className="flex h-20 w-20 flex-shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-white/95 p-2">
                      <img
                        src={edu.img}
                        alt={edu.school}
                        className="max-h-full max-w-full object-contain"
                      />
                    </div>

                    <div className="flex-1">
                      <h3 className="text-xl font-semibold leading-snug text-white sm:text-2xl">
                        {edu.degree}
                      </h3>
                      <p className="mt-1 text-gray-300">{edu.school}</p>
                      <p className="mt-2 text-sm text-gray-500">{edu.date}</p>
                    </div>
                  </div>

                  <div className="mt-6 flex flex-wrap gap-3">
                    <span className="rounded-full border border-purple-500/30 bg-purple-500/10 px-4 py-1 text-sm text-purple-300">
                      Grade: {edu.grade}
                    </span>
                  </div>

                  <p className="mt-5 leading-8 text-gray-300">
                    {edu.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Education;
