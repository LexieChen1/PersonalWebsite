import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <div className="absolute top-6 right-6 z-50">
        <button onClick={() => setMenuOpen(!menuOpen)} className="flex flex-col gap-1 group">
          <span className="w-6 h-1 bg-text rounded"></span>
          <span className="w-6 h-1 bg-text rounded"></span>
          <span className="w-6 h-1 bg-text rounded"></span>
        </button>
      </div>

      {/* Sidebar Menu */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center"
          onClick={() => setMenuOpen(false)}
        >
          {/* Close Icon */}
          <button
            className="absolute top-6 right-6 text-white text-4xl font-bold z-50"
            onClick={() => setMenuOpen(false)}
          >
            &times;
          </button>

          {/* Menu Content */}
          <div
            className="flex flex-col items-center justify-center space-y-8 text-white text-2xl font-semibold"
            onClick={(e) => e.stopPropagation()} // prevent backdrop click from closing
          >
            <a href="#home" onClick={() => setMenuOpen(false)} className="hover:text-blue-300">Home</a>
            <a href="#about" onClick={() => setMenuOpen(false)} className="hover:text-blue-300">About me</a>
            <a href="#projects" onClick={() => setMenuOpen(false)} className="hover:text-blue-300">My Projects</a>
            <a href="#contact" onClick={() => setMenuOpen(false)} className="hover:text-blue-300">Contact Me</a>
          </div>
        </div>
      )}
      
      <div
        className="relative w-screen h-screen bg-background text-text flex flex-col items-center justify-center space-y-10 overflow-hidden"
        style={{ backgroundImage: "url('/desktop.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0 }}
          className="text-text text-8xl font-savate"
        >
          HEY THERE 嗨!
        </motion.h1>

        <motion.h1
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-text text-2xl font-mono"
        >
          Welcome
        </motion.h1>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="text-text text-3xl font-mono"
        >
          to Lexie's page
        </motion.h1>
      </div>
    </>
    
  );
}