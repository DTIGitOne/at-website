import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import UpArrow from '@/svg/upArrow';

const ScrollToTopButton = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight;
      const viewportHeight = window.innerHeight;
      const scrollY = window.scrollY;

      // Check if the user is within the last 4% of the page height
      if (scrollY + viewportHeight >= totalHeight * 0.96) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <motion.button
      onClick={scrollToTop}
      initial={{ opacity: 0 }}
      animate={{ opacity: showButton ? 1 : 0 }}
      transition={{ duration: 0.5 }}
      style={{
        position: 'fixed',
        bottom: '40px',
        right: '50px',
        cursor: 'pointer',
        display: showButton ? 'block' : 'none',
      }}
    >
      <UpArrow />
    </motion.button>
  );
};

export default ScrollToTopButton;
