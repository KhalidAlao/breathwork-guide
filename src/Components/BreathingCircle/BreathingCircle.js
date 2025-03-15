import React from 'react'; 
import styles from './BreathingCircle.module.css';
import { motion } from 'framer-motion';

const BreathingCircle = ({ isBreathing, breathPhase, timeLeft }) => {
    // Define animation variations for different breathing phases
    const variants = {
        inhale: { 
          scale: 1.4,
          opacity: 0.8,
          transition: { duration: timeLeft, ease: "easeInOut" },
          background: "linear-gradient(145deg, #7F5AF0 0%, #2CB67D 100%)",
          
        },hold: { 
            scale: 1.2,
            opacity: 0.9,
            background: "linear-gradient(145deg, #7F5AF0 30%, #2CB67D 70%)"
          },

        exhale: {
          scale: 1,
          opacity: 1,
          background: "linear-gradient(145deg, #2CB67D 0%, #7F5AF0 100%)",
          transition: { duration: timeLeft, ease: "easeInOut" }
        }
        
      };



      return (
        <div className={styles.container}>
          <motion.div 
            className={styles.circle}
            variants={variants}
            animate={isBreathing ? breathPhase : "exhale"}
            initial="exhale"
          />
          <div className={styles.glow} />
        </div>
      );
    };

export default BreathingCircle;