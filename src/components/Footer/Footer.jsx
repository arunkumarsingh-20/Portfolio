import React from "react";
import { FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";
import { SiLeetcode, SiCodechef, SiCodeforces } from "react-icons/si";

const Footer = () => {
  // Smooth scroll function
  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="text-white py-8 px-[12vw] md:px-[7vw] lg:px-[20vw]">
      <div className="container mx-auto text-center">
        {/* Name / Logo */}
        <h2 className="text-xl font-semibold text-purple-500">Arun Kumar Singh</h2>


        {/* Social Media Icons - Responsive */}
        <div className="flex flex-wrap justify-center space-x-4 mt-6">
          {[
            { icon: <FaLinkedin />, link: "https://www.linkedin.com/in/arun-kumar-singh-19334a29b/" },
            { icon: <FaGithub />, link: "https://github.com/arunkumarsingh-20" },
            { icon: <FaInstagram />, link: "http://instagram.com/_.arun2511/" },
            { icon: <SiLeetcode />, link: "https://leetcode.com/codewiitharun2513" },
            { icon: <SiCodechef />, link: "https://www.codechef.com/users/arunsingh2004" },
            { icon: <SiCodeforces />, link: "https://codeforces.com/profile/arun_7609" },


          ].map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl hover:text-purple-500 transition-transform transform hover:scale-110"
            >
              {item.icon}
            </a>
          ))}
        </div>

        {/* Copyright Text */}
        <p className="text-sm text-gray-400 mt-6">
          © 2025 Arun Kumar Singh. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
