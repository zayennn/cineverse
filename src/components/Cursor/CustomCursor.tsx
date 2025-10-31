import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../../contexts/ThemeContext';
import styles from './CustomCursor.module.css';

const CustomCursor: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    const mouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      
      // Check if hovering over clickable elements
      const target = e.target as HTMLElement;
      setIsPointer(
        window.getComputedStyle(target).cursor === 'pointer' ||
        target.tagName === 'BUTTON' ||
        target.tagName === 'A' ||
        target.closest('button') !== null ||
        target.closest('a') !== null
      );
    };

    const mouseEnter = () => setIsVisible(true);
    const mouseLeave = () => setIsVisible(false);

    document.addEventListener('mousemove', mouseMove);
    document.addEventListener('mouseenter', mouseEnter);
    document.addEventListener('mouseleave', mouseLeave);

    return () => {
      document.removeEventListener('mousemove', mouseMove);
      document.removeEventListener('mouseenter', mouseEnter);
      document.removeEventListener('mouseleave', mouseLeave);
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      scale: isPointer ? 1.5 : 1,
    },
  };

  if (!isVisible) return null;

  return (
    <>
      <motion.div
        className={`${styles.cursor} ${isPointer ? styles.pointer : ''} ${
          resolvedTheme === 'light' ? styles.light : styles.dark
        }`}
        variants={variants}
        animate="default"
        transition={{ type: "tween", ease: "backOut", duration: 0.15 }}
      />
      <motion.div
        className={`${styles.cursorFollower} ${isPointer ? styles.pointer : ''}`}
        variants={{
          default: {
            x: mousePosition.x - 4,
            y: mousePosition.y - 4,
            scale: isPointer ? 1.8 : 1,
          },
        }}
        animate="default"
        transition={{ type: "tween", ease: "backOut", duration: 0.3 }}
      />
    </>
  );
};

export default CustomCursor;