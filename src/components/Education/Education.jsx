import React from "react";
import { education } from "../../constants"; // Import education data

const Education = () => {
  return (
    <section
      id="education"
      className="py-24 px-[8vw] md:px-[6vw] lg:px-[16vw] font-sans bg-skills-gradient clip-path-custom-3"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">EDUCATION</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-300 mt-4 text-lg max-w-2xl mx-auto leading-relaxed">
          My education reflects a continuous journey of learning and growth.
          Below are the details of my academic background.
        </p>
      </div>

      {/* Timeline Container */}
      <div className="relative">
        {/* Vertical Line */}
        <div className="absolute left-6 sm:left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-purple-500 via-white to-purple-500 h-full"></div>

        {/* Education Entries */}
        {education.map((edu, index) => (
          <div
            key={edu.id}
            className={`relative flex flex-col sm:flex-row items-center mb-20 ${index % 2 === 0 ? "sm:justify-start" : "sm:justify-end"
              }`}
          >
            {/* Timeline Dot */}
            <div className="absolute left-6 sm:left-1/2 transform -translate-x-1/2 w-6 h-6 bg-purple-500 rounded-full border-4 border-white shadow-lg"></div>

            {/* Card */}
            <div
              className={`w-full sm:max-w-md p-6 sm:p-8 rounded-2xl shadow-2xl border border-white bg-gray-900/80 backdrop-blur-md shadow-[0_0_20px_1px_rgba(130,69,236,0.3)] transition-transform duration-300 hover:scale-105 ${index % 2 === 0 ? "sm:ml-12" : "sm:mr-12"
                } sm:ml-44 sm:mr-44 mt-10 sm:mt-0`}
            >
              {/* Flex container for image + text */}
              <div className="flex items-center space-x-6">
                {/* School Logo */}
                <div className="w-24 h-20 bg-white rounded-md overflow-hidden shadow-md flex items-center justify-center flex-shrink-0">
                  <img
                    src={edu.img}
                    alt={edu.school}
                    className="max-w-[90%] max-h-[90%] object-contain"
                  />
                </div>


                {/* Degree + School */}
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-white">
                    {edu.degree}
                  </h3>
                  <h4 className="text-md text-gray-300">{edu.school}</h4>
                  <p className="text-sm text-gray-500 mt-1">{edu.date}</p>
                </div>
              </div>

              {/* Grade + Description */}
              <p className="mt-4 text-purple-400 font-semibold">
                Grade: {edu.grade}
              </p>
              <p className="mt-2 text-gray-300 leading-relaxed">{edu.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
