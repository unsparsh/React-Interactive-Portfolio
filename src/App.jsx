import { useEffect, useState } from "react";
import Home from "./components/Home.jsx";
import Navbar from "./components/Navbar.jsx";
import SplashCursor from "../Cursor/SplashCursor/SplashCursor.jsx";
import About from "./components/About.jsx";
import Projects from "./components/Projects.jsx";
import ShinyText from "../shiningButton/ShinyText/ShinyText.jsx";
import Skills from "./components/Skills.jsx";
import Footer from "./components/Footer.jsx";
import Contact from "./components/Contact.jsx";
import Dock from "../dock/Dock/Dock.jsx";
import { FaGithub , FaLinkedin , FaUser , FaInstagramSquare  } from "react-icons/fa";


function App() {
  const [isMobile, setIsMobile] = useState(false);
  const items = [
    {
      icon: <FaGithub  size={18} />,
      label: "Github",
      onClick: () => window.open("https://github.com/unsparsh", "_blank"),
    },
    {
      icon: <FaLinkedin   size={18} />,
      label: "LinkedIn",
      onClick: () => window.open("https://linkedin.com/in/unsparsh", "_blank"),
    },
    {
      icon: <FaUser    size={18} />,
      label: "Portfolio",
      onClick: () => window.open("https://sparshsingh.netlify.app/", "_blank"),
    },
    {
      icon: <FaInstagramSquare     size={18} />,
      label: "Instagram",
      onClick: () => window.open("https://www.instagram.com/sparsh_chinsa/", "_blank"),
    },
  ];

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768); // Less than 768px = mobile
    };

    checkScreenSize(); // Check initially

    window.addEventListener("resize", checkScreenSize); // Listen for resize
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  if (isMobile) {
    return (
      <div className="h-screen w-screen bg-black text-white flex items-center justify-center p-6">
        <div className="w-full max-w-sm text-center">
          <h2 className="text-lg font-semibold mb-4">⚠️ Screen Too Small</h2>
          <p className="text-sm leading-relaxed">
            This website is designed for larger screens. <br />
            Please access it on a <strong>laptop</strong> or a{" "}
            <strong>desktop</strong> for the best experience.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#050506] text-white min-h-screen overflow-hidden">
      <SplashCursor />
      <div className="mt-3 bg-transparent">
        <Navbar />
      </div>

      <div id="home">
        <Home />
      </div>

      <div className="my-8 h-[1px] w-full bg-gradient-to-r from-transparent via-neutral-300 to-transparent dark:via-neutral-700" />

      <div id="about">
        <About />
      </div>

      <div className="my-8 h-[1px] w-full bg-gradient-to-r from-transparent via-neutral-300 to-transparent dark:via-neutral-700" />

      <div
        id="projects"
        className="w-full overflow-hidden flex flex-col text-3xl font-bold items-center justify-center h-10vh"
      >
        <ShinyText
          text="Explore Projects here"
          disabled={false}
          speed={3}
          className="custom-class flex items-center justify-center h-10vh"
        />
        <br />
        <Projects />
      </div>

      <div className="my-8 h-[1px] w-full bg-gradient-to-r from-transparent via-neutral-300 to-transparent dark:via-neutral-700" />

      <br />
      <div className="flex flex-col items-center justify-center text-3xl font-bold w-full">
        <ShinyText
          text="Skills Over here"
          disabled={false}
          speed={3}
          className="custom-class"
        />
        <br />
        <Skills />
      </div>

      <div className="my-8 h-[1px] w-full bg-gradient-to-r from-transparent via-neutral-300 to-transparent dark:via-neutral-700" />
     <div id="contact"><Contact /></div>
      
      <Footer />
      <Dock
        items={items}
        panelHeight={68}
        baseItemSize={50}
        magnification={70}
      />
    </div>
  );
}

export default App;
