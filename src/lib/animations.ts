import { Variants } from "framer-motion";

/**
 * A fast, spring-based pop-in animation to mimic the magnetic snap 
 * of the physical hardware totems. High stiffness, low damping.
 */
export const snapIn: Variants = {
  hidden: { 
    opacity: 0, 
    scale: 0.85,
    y: 20
  },
  visible: { 
    opacity: 1, 
    scale: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 25,
      mass: 0.8
    }
  }
};

/**
 * Standard fade and slide-up animation for text and content reveals on scroll.
 */
export const fadeUp: Variants = {
  hidden: { 
    opacity: 0, 
    y: 40 
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1] // Custom cubic-bezier for a smooth, premium feel
    }
  }
};

/**
 * Stagger children animations. Useful for lists or grids.
 */
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};
