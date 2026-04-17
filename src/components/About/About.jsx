import React from "react";
import ReactTypingEffect from "react-typing-effect";
import Tilt from "react-parallax-tilt";
import profileImage from "../../assets/Arun-profile.png";
import { heroStats, profile } from "../../constants";

const About = () => {
  return (
    <section
      id="about"
      className="px-[7vw] md:px-[7vw] lg:px-[20vw] py-24 md:py-28 lg:py-32 font-sans"
    >
      <div className="grid items-stretch gap-12 lg:grid-cols-2">
        <div className="flex h-full">
          <div className="flex h-full flex-col justify-center text-center lg:text-left">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-gray-300 backdrop-blur-md">
              <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(74,222,128,0.85)]" />
              Open for internships, freelance work, and collaboration
            </div>

            <h1 className="mt-6 text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
              Hi, I am{" "}
              <span className="text-gradient">{profile.name}</span>
            </h1>

            <div className="mt-4 min-h-[4.5rem]">
              <h2 className="text-xl font-semibold leading-snug text-gray-200 sm:text-2xl lg:text-3xl">
                <span className="text-white">I build as a </span>
                <span className="inline-block max-w-full align-middle break-words text-[#8245ec]">
                  <ReactTypingEffect
                    text={[
                      "Full Stack Developer",
                      "Problem Solver",
                      "ECE Undergrad at NIT Delhi",
                      "Web Development Enthusiast",
                    ]}
                    speed={80}
                    eraseSpeed={40}
                    typingDelay={350}
                    eraseDelay={1500}
                    cursorRenderer={(cursor) => (
                      <span className="text-[#8245ec]">{cursor}</span>
                    )}
                  />
                </span>
              </h2>
            </div>

            <p className="mt-6 mx-auto max-w-2xl text-base leading-8 text-gray-400 sm:text-lg lg:mx-0">
              {profile.summary}
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-3 lg:justify-start">
              {["React", "Next.js", "Tailwind CSS", "Node.js", "MERN", "DSA"].map(
                (item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-gray-300 transition hover:border-purple-500/30 hover:bg-white/10"
                  >
                    {item}
                  </span>
                )
              )}
            </div>

            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row lg:justify-start">
              <a
                href={profile.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#8245ec] to-[#a855f7] px-8 py-3 text-base font-semibold text-white transition-transform duration-300 hover:scale-105"
                style={{
                  boxShadow: "0 0 18px rgba(130,69,236,0.45)",
                }}
              >
                View Resume
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-8 py-3 text-base font-semibold text-white transition hover:bg-white/10"
              >
                Contact Me
              </a>
            </div>
          </div>
        </div>

        <div className="flex h-full">
          <div className="relative flex h-full w-full justify-center lg:justify-end">
            <div className="absolute -left-6 top-8 h-16 w-16 rounded-full bg-purple-500/20 blur-3xl" />
            <div className="absolute bottom-8 right-0 h-16 w-16 rounded-full bg-fuchsia-500/15 blur-3xl" />

            <Tilt
              className="relative flex h-full w-full max-w-[28rem] flex-col rounded-[1.7rem] border border-white/10 bg-white/5 p-2.5 backdrop-blur-md shadow-[0_0_40px_rgba(130,69,236,0.12)]"
              tiltMaxAngleX={14}
              tiltMaxAngleY={14}
              perspective={1000}
              scale={1.02}
              transitionSpeed={1000}
              gyroscope={true}
            >
              <div className="flex h-full flex-col gap-2.5">
                <div className="overflow-hidden rounded-[1.15rem] border border-white/10 bg-[#0d081f] p-2">
                  <img
                    src={profileImage}
                    alt="Arun Kumar Singh"
                    className="h-[15rem] w-full rounded-[0.9rem] object-cover sm:h-[16rem] lg:h-[17rem]"
                  />
                </div>

                <div className="grid grid-cols-2 gap-2">
                  {heroStats.map((stat) => (
                    <div
                      key={stat.label}
                      className="rounded-xl border border-white/10 bg-[#0d081f]/90 p-3 text-left"
                    >
                      <p className="text-[10px] uppercase tracking-[0.18em] text-gray-500">
                        {stat.label}
                      </p>
                      <p className="mt-1 text-[17px] font-bold text-white">
                        {stat.value}
                      </p>
                      <p className="mt-1 text-[11px] leading-5 text-gray-400">
                        {stat.note}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-auto rounded-xl border border-white/10 bg-[#0d081f]/90 p-3">
                  <p className="text-[10px] uppercase tracking-[0.22em] text-gray-500">
                    Current Focus
                  </p>
                  <p className="mt-1.5 text-sm font-semibold leading-6 text-white">
                    Building polished web experiences with performance, clarity, and modern UI.
                  </p>
                  <p className="mt-1 text-xs leading-5 text-gray-400">
                    Location: {profile.location}
                  </p>
                </div>
              </div>
            </Tilt>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
