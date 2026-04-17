import React from "react";
import { FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";
import { SiLeetcode, SiCodechef, SiCodeforces } from "react-icons/si";
import { profile, socialLinks } from "../../constants";

const Footer = () => {
  const socialItems = [
    { icon: <FaLinkedin />, link: socialLinks.linkedin, label: "LinkedIn" },
    { icon: <FaGithub />, link: socialLinks.github, label: "GitHub" },
    { icon: <FaInstagram />, link: socialLinks.instagram, label: "Instagram" },
    { icon: <SiLeetcode />, link: socialLinks.leetcode, label: "LeetCode" },
    { icon: <SiCodechef />, link: socialLinks.codechef, label: "CodeChef" },
    { icon: <SiCodeforces />, link: socialLinks.codeforces, label: "Codeforces" },
  ];

  return (
    <footer className="px-[12vw] md:px-[7vw] lg:px-[20vw] py-10 text-white">
      <div className="rounded-3xl border border-white/10 bg-white/5 px-6 py-8 text-center backdrop-blur-md">
        <h2 className="text-2xl font-semibold text-white">{profile.name}</h2>
        <p className="mt-2 text-sm text-gray-400">
          Full Stack Developer | NIT Delhi
        </p>

        <div className="mt-6 flex flex-wrap justify-center gap-4">
          {socialItems.map((item) => (
            <a
              key={item.label}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={item.label}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-[#131025] text-lg text-gray-300 transition hover:-translate-y-1 hover:border-purple-500/40 hover:text-[#8245ec]"
            >
              {item.icon}
            </a>
          ))}
        </div>

        <p className="mt-6 text-sm text-gray-500">
          © 2026 {profile.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
