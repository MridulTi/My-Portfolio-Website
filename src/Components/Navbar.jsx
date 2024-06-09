import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import React from "react";

export default function Navbar() {
  const [shouldShowActions, setShouldShowActions] = React.useState(false);
  const [lastYPos, setLastYPos] = React.useState(0);
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  React.useEffect(() => {
    function handleScroll() {
      let yPos = window.scrollY;
      let isScrollingUp = yPos < lastYPos;
      setShouldShowActions(isScrollingUp);
      setLastYPos(yPos);
    }
    window.addEventListener('scroll', handleScroll, false);
    return () => {
      window.removeEventListener('scroll', handleScroll, false);
    };
  }, [lastYPos]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <motion.div
      animate={{ opacity: shouldShowActions ? 1 : 0 }}
      transition={{ opacity: { duration: 0.2 } }}
      initial={{ opacity: 1 }}
      className="fixed top-0 w-full z-50 text-lg backdrop-grayscale backdrop-blur-md border-b-2 py-2"
    >
      <div className="flex justify-between items-center px-4">
        <h1 className="text-lg md:text-xl font-semibold logo">
          <Link to="/">{"{%Mridul%}"}</Link>
        </h1>
        <div className="hidden md:flex gap-10">
          <Link to="/Projects">Projects</Link>
          <Link to="/blogs">Blogs</Link>
        </div>
        <a href="https://drive.google.com/file/d/15Ra8C0qmSjdyfXV_RM8LGWtQfM4lISTy/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="hidden md:flex">
          <button className="bg-sec-sec-grad px-8 text-tertiary py-1 drop-shadow-md w-fit text-md tracking-wider font-semibold">
            Resume
          </button>
        </a>
        <button className="md:hidden" onClick={toggleMenu}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
          </svg>
        </button>
      </div>
      {isMenuOpen && (
        <div className="md:hidden flex flex-col place-items-center gap-4 mt-4 px-4">
          <Link to="/Projects" onClick={toggleMenu}>Projects</Link>
          <Link to="/blogs" onClick={toggleMenu}>Blogs</Link>
          <a href="https://drive.google.com/file/d/15Ra8C0qmSjdyfXV_RM8LGWtQfM4lISTy/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="">
          <button className="bg-sec-sec-grad px-8 text-tertiary py-1 drop-shadow-md w-fit text-md tracking-wider font-semibold">
            Resume
          </button>
        </a>
        </div>
      )}
    </motion.div>
  );
}
