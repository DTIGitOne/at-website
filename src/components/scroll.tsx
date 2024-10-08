'use client'
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const ScrollFadeComponent = () => {
  const [scrollY, setScrollY] = useState(0);
  
  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Calculate the opacity based on the scroll position
  const opacity = scrollY < 100 ? 1 : Math.max(0, 1 - (scrollY - 100) / 200);

  return (
    <motion.div
      style={{
        position: 'fixed',
        bottom: "4%",
        left: "47%",
        opacity,
        color: "#ffffff",
        fontFamily: "Open Sans, sans-serif",
        fontSize: "2rem",
        fontWeight: "300",
        userSelect: "none"
      }}
      transition={{ duration: 0.3 }}
    >
      Scroll down
    </motion.div>
  );
};

export default ScrollFadeComponent;
