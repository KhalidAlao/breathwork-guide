import React from 'react'; 
import styles from './BreathingCircle.css';
import { motion } from 'framer-motion';

const BreathingCircle = ({ isBreathing, breathPhase, timeLeft }) => {
    // Define animation variations for different breathing phases
    const variants = {
      inhale: { scale: 1.5, transition: { duration: timeLeft } },
      exhale: { scale: 1.0, transition: { duration: timeLeft } },
      // Keep current scale for hold 
      hold: { scale: 1.5 }
    };


    // Decide which animation variant to apply based on the state
  let currentVariant = breathPhase;
  if (!isBreathing) {
    currentVariant = "exhale"; // default to resting state when not active
  }

  return (
    <div style={{ margin: '2rem auto', width: '200px', height: '200px' }}>
      <motion.div 
        variants={variants}
        animate={currentVariant}
        style={{
          width: '100%',
          height: '100%',
          borderRadius: '50%',
          background: 'lightblue',
          margin: '0 auto'
        }}
      />
    </div>
  );
};





























export default BreathingCircle;