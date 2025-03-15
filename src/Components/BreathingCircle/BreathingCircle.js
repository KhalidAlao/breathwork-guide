import React from 'react'; 
import styles from './BreathingCircle.css';
import { motion } from 'framer-motion';

const BreathingCircle = ({ isBreathing, breathPhase, timeLeft }) => {
    // Define animation variations for different breathing phases
    const variants = {
        inhale: { 
          scale: 1.4,
          background: ["linear-gradient(145deg, #7F5AF0 0%, #2CB67D 100%)", "linear-gradient(145deg, #2CB67D 0%, #7F5AF0 100%)"],
          transition: { duration: timeLeft, repeat: Infinity }
        },
        exhale: {
          scale: 0.9,
          background: ["linear-gradient(145deg, #2CB67D 0%, #7F5AF0 100%)", "linear-gradient(145deg, #7F5AF0 0%, #2CB67D 100%)"],
          transition: { duration: timeLeft, repeat: Infinity }
        },
        hold: { 
          scale: 1.2,
          background: "linear-gradient(145deg, #7F5AF0 30%, #2CB67D 70%)"
        }
      };


    // Decide which animation variant to apply based on the state
  let currentVariant = breathPhase;
  if (!isBreathing) {
    currentVariant = "exhale"; // default to resting state when not active
  }

  return (
    <div className={styles.container}>
      <motion.div 
        className={styles.circle}
        variants={variants}
        animate={breathPhase}
        initial={false}
      />
      <div className={styles.glow} />
    </div>
  );
};

export default BreathingCircle;