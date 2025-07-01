"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { IoMenu } from "react-icons/io5";

const navItems = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Navigation() {
  const [activeSection, setActiveSection] = useState("hero");
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => item.href.slice(1));
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.getElementById(href.slice(1));
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-40 sm:p-6"
      initial={{ y: 0 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="glass-effect  rounded-2xl m-2 sm:rounded-full px-8 py-4 flex justify-end items-start sm:justify-center">
          <ul
            className={`flex transition-all duration-700 ease-in-out ${
              show
                ? "max-h-96 opacity-100"
                : " max-h-0 opacity-0 overflow-hidden"
            } sm:flex sm:max-h-none sm:opacity-100 flex-col sm:space-x-8 sm:flex-row min-w-full items-center justify-center`}
          >
            {navItems.map((item) => (
              <li
                key={item.name}
                className="min-w-full sm:min-w-auto text-center"
                onClick={() => setShow(!show)}
              >
                <button
                  onClick={() => scrollToSection(item.href)}
                  className={`relative px-4 py-2 rounded-full transition-all duration-300 min-w-full ${
                    activeSection === item.href.slice(1)
                      ? "text-blue-400"
                      : "text-gray-300 hover:text-white"
                  }`}
                >
                  {item.name}
                  {activeSection === item.href.slice(1) && (
                    <motion.div
                      className="absolute inset-0 bg-blue-500/20 rounded-full "
                      layoutId="activeSection"
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 30,
                      }}
                    />
                  )}
                </button>
              </li>
            ))}
          </ul>
          <button
            onClick={() => setShow(!show)}
            className={`sm:hidden transition-all duration-500 ease-in-out ${
              show ? "absolute -right-10 opacity-10 w-0" : " opacity-100"
            } `}
          >
            <IoMenu size={30} />
          </button>
        </div>
      </div>
    </motion.nav>
  );
}
