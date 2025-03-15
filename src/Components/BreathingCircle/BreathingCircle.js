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






























export default BreathingCircle;