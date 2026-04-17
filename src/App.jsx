import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Work from "./components/Work/Work";
import Education from "./components/Education/Education";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import BlurBlob from "./components/BlurBlob";

const App = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showTopButton, setShowTopButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;

      setScrollProgress(progress);
      setShowTopButton(scrollTop > 500);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#050414] text-white">
      <div
        className="fixed left-0 top-0 z-50 h-1 bg-gradient-to-r from-[#8245ec] via-[#a855f7] to-fuchsia-400 transition-all duration-150"
        style={{ width: `${scrollProgress}%` }}
      />

      <BlurBlob
        position={{ top: "18%", left: "14%" }}
        size={{ width: "30%", height: "34%" }}
      />
      <BlurBlob
        position={{ top: "70%", left: "84%" }}
        size={{ width: "28%", height: "30%" }}
        color="bg-fuchsia-500"
        opacity="opacity-10"
      />
      <BlurBlob
        position={{ top: "42%", left: "50%" }}
        size={{ width: "18%", height: "18%" }}
        color="bg-cyan-500"
        opacity="opacity-10"
      />

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.04),transparent_45%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f12_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f12_1px,transparent_1px)] bg-[size:16px_24px] [mask-image:radial-gradient(ellipse_65%_55%_at_50%_0%,#000_70%,transparent_100%)]" />

      <div className="relative z-10 pt-20">
        <Navbar />

        <main>
          <About />
          <Education />
          <Skills />
          <Work />
          <Contact />
        </main>

        <Footer />
      </div>

      {showTopButton && (
        <button
          onClick={scrollToTop}
          aria-label="Back to top"
          className="fixed bottom-6 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/10 text-white backdrop-blur-md transition hover:-translate-y-1 hover:bg-white/15"
          style={{
            boxShadow: "0 0 18px rgba(130,69,236,0.25)",
          }}
        >
          ↑
        </button>
      )}
    </div>
  );
};

export default App;
