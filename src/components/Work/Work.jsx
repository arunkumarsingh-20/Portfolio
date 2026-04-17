import React, { useEffect, useState } from "react";
import { projects } from "../../constants";

const Work = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleOpenModal = (project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  useEffect(() => {
    document.body.style.overflow = selectedProject ? "hidden" : "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [selectedProject]);

  return (
    <section
      id="work"
      className="relative px-[12vw] md:px-[7vw] lg:px-[20vw] py-24 font-sans"
    >
      <div className="text-center mb-14">
        <p className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-gray-300">
          Selected work
        </p>
        <h2 className="mt-6 text-4xl font-bold text-white">Projects</h2>
        <div className="w-28 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="mt-4 text-lg text-gray-400 max-w-3xl mx-auto leading-8">
          A collection of projects that show my ability to design, build, and ship
          modern web experiences with practical functionality.
        </p>
      </div>

      <div className="grid gap-8 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((project) => (
          <button
            key={project.id}
            onClick={() => handleOpenModal(project)}
            className="group text-left overflow-hidden rounded-3xl border border-white/10 bg-gray-900/80 backdrop-blur-md shadow-[0_0_25px_rgba(130,69,236,0.12)] transition duration-300 hover:-translate-y-2 hover:border-purple-500/40"
          >
            <div className="p-4">
              <div className="overflow-hidden rounded-2xl">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-52 w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
            </div>

            <div className="p-6 pt-2">
              <h3 className="text-2xl font-bold text-white">{project.title}</h3>
              <p className="mt-3 text-gray-400 line-clamp-3 leading-7">
                {project.description}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-[#251f38] px-3 py-1 text-xs font-semibold text-purple-400"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-6 text-sm font-semibold text-purple-300">
                Click to view details
              </div>
            </div>
          </button>
        ))}
      </div>

      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4">
          <div className="relative max-h-[85vh] w-full max-w-4xl overflow-y-auto rounded-3xl border border-white/10 bg-[#0d081f] shadow-2xl">
            <button
              onClick={handleCloseModal}
              className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-2xl text-white transition hover:bg-white/10"
              aria-label="Close modal"
            >
              &times;
            </button>

            <div className="p-5 sm:p-8">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="h-64 w-full rounded-2xl object-cover"
              />

              <div className="mt-6">
                <h3 className="text-3xl font-bold text-white">
                  {selectedProject.title}
                </h3>
                <p className="mt-4 text-gray-400 leading-8">
                  {selectedProject.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {selectedProject.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-[#251f38] px-3 py-1 text-xs font-semibold text-purple-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-8 flex flex-col sm:flex-row gap-4">
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex w-full items-center justify-center rounded-full border border-white/10 bg-white/5 px-6 py-3 font-semibold text-white transition hover:bg-white/10 sm:w-1/2"
                  >
                    View Code
                  </a>

                  {selectedProject.webapp ? (
                    <a
                      href={selectedProject.webapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex w-full items-center justify-center rounded-full bg-gradient-to-r from-[#8245ec] to-[#a855f7] px-6 py-3 font-semibold text-white transition hover:scale-[1.02] sm:w-1/2"
                      style={{
                        boxShadow: "0 0 18px rgba(130,69,236,0.3)",
                      }}
                    >
                      View Live
                    </a>
                  ) : (
                    <span className="inline-flex w-full items-center justify-center rounded-full border border-white/10 bg-white/5 px-6 py-3 font-semibold text-gray-400 sm:w-1/2">
                      Live demo not available
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Work;
