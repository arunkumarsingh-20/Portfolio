import React, { useEffect, useMemo, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { profile, socialLinks } from "../../constants";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("about");
  const [isScrolled, setIsScrolled] = useState(false);

  const menuItems = useMemo(
    () => [
      { id: "about", label: "About" },
      { id: "education", label: "Education" },
      { id: "skills", label: "Skills" },
      { id: "work", label: "Projects" },
      { id: "contact", label: "Contact" },
    ],
    []
  );

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };

    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting);
        if (visible?.target?.id) {
          setActiveSection(visible.target.id);
        }
      },
      {
        root: null,
        threshold: 0.55,
      }
    );

    sections.forEach((section) => observer.observe(section));
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      sections.forEach((section) => observer.unobserve(section));
      observer.disconnect();
    };
  }, []);

  const handleMenuItemClick = (sectionId) => {
    setIsOpen(false);
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      <nav
        className={`fixed left-0 top-0 z-50 w-full transition-all duration-300 ${
          isScrolled
            ? "bg-[#050414]/70 backdrop-blur-xl border-b border-white/8 shadow-[0_10px_40px_rgba(0,0,0,0.25)]"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex items-center justify-between px-[7vw] py-4 md:px-[7vw] lg:px-[20vw]">
          <button
            onClick={() => handleMenuItemClick("about")}
            className="group inline-flex items-center gap-1 text-lg font-semibold text-white"
            aria-label="Go to home section"
          >
            <span className="text-[#8245ec] text-2xl">&lt;</span>
            <span className="text-white text-2xl tracking-tight">
              {profile.name.split(" ")[0]}
            </span>
            <span className="text-[#8245ec]">/</span>
            <span className="text-[#8245ec] text-2xl">&gt;</span>
          </button>

          <div className="hidden md:flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 backdrop-blur-md">
            {menuItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleMenuItemClick(item.id)}
                  className={`relative rounded-full px-4 py-2 text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? "bg-white/10 text-white"
                      : "text-gray-300 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </div>

          <div className="hidden md:flex items-center gap-3">
            <a
              href={socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-gray-300 transition hover:-translate-y-0.5 hover:border-purple-500/30 hover:text-[#8245ec]"
              aria-label="GitHub"
            >
              <FaGithub size={18} />
            </a>
            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-gray-300 transition hover:-translate-y-0.5 hover:border-purple-500/30 hover:text-[#8245ec]"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={18} />
            </a>

            <a
              href={profile.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#8245ec] to-[#a855f7] px-5 py-2.5 text-sm font-semibold text-white transition hover:scale-[1.02]"
              style={{ boxShadow: "0 0 18px rgba(130,69,236,0.28)" }}
            >
              Resume
            </a>
          </div>

          <button
            className="md:hidden inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-[#8245ec]"
            onClick={() => setIsOpen((prev) => !prev)}
            aria-label="Toggle menu"
          >
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </nav>

      {isOpen && (
        <div className="fixed inset-0 z-40 bg-black/55 backdrop-blur-sm md:hidden">
          <div className="absolute left-1/2 top-20 w-[90%] -translate-x-1/2 overflow-hidden rounded-3xl border border-white/10 bg-[#050414]/95 shadow-2xl">
            <div className="border-b border-white/8 px-5 py-4">
              <p className="text-xs uppercase tracking-[0.3em] text-gray-500">
                Navigation
              </p>
              <p className="mt-2 text-lg font-semibold text-white">
                {profile.name}
              </p>
            </div>

            <div className="flex flex-col p-3">
              {menuItems.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleMenuItemClick(item.id)}
                    className={`flex items-center justify-between rounded-2xl px-4 py-4 text-left text-sm font-medium transition ${
                      isActive
                        ? "bg-white/8 text-white"
                        : "text-gray-300 hover:bg-white/5 hover:text-white"
                    }`}
                  >
                    <span>{item.label}</span>
                    {isActive && (
                      <span className="h-2 w-2 rounded-full bg-[#8245ec]" />
                    )}
                  </button>
                );
              })}
            </div>

            <div className="border-t border-white/8 px-5 py-5">
              <div className="flex items-center gap-3">
                <a
                  href={socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-gray-300 transition hover:text-[#8245ec]"
                  aria-label="GitHub"
                >
                  <FaGithub size={18} />
                </a>
                <a
                  href={socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-gray-300 transition hover:text-[#8245ec]"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin size={18} />
                </a>

                <a
                  href={profile.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-auto inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#8245ec] to-[#a855f7] px-5 py-2.5 text-sm font-semibold text-white"
                >
                  Resume
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
