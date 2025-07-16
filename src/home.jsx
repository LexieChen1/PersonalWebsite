import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";


export default function Home() {
  const items = [
    <motion.h1
      key="1"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.2}}
      className="text-text text-2sm font-savate"
    >
      HEY THERE 嗨!
    </motion.h1>,
    <motion.h1
      key="2"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.2 }}
      className="text-text text-9xl font-savate font-bold"
    >
      Welcome
    </motion.h1>,
    <motion.h1
      key="3"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.2 }}
      className="text-text text-3xl font-marker"
    >
      to Lexie's page
    </motion.h1>
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % items.length);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="relative w-screen h-screen bg-background text-white flex items-center justify-center overflow-hidden"
      style={{ backgroundImage: "url('/desktop.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <div className="z-10 text-xl text-center space-y-4">
        <AnimatePresence mode="wait">
          {items[index]}
        </AnimatePresence>
      </div>
    </div>
  );
}