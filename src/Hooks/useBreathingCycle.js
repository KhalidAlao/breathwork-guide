import { useState, useEffect, useRef, useMemo} from 'react';

export default function useBreathingCycle() {
// State to track if the user's breathing session is active
const [isBreathing, setIsBreathing] = useState(false);

// Current breathing phase
const [breathPhase, setBreathPhase] = useState('inhale');

// Hold state to pause/ resume without resetting phase
const [hold, setHold] = useState(false);

// Countdown timer for the current phase
const [timeLeft, setTimeLeft] = useState(0);

// Reference to track the current phase index in the cycle
const phaseIndexRef = useRef(0);

// Reference to the timer interval
const intervalRef = useRef(null);



// Breathing phases and durations
const breathingPhases = useMemo(() => [
    { name: "inhale", duration: 4 },
    { name: "exhale", duration: 8 },
    { name: "hold", duration: 7 }
  ], []);
  

// Function to start the breathing session
const startBreathing = () => {
    // Ensure that breathing times are greater than zero
    if (breathingPhases[0].duration <= 0 || breathingPhases[2].duration <= 0 ) {
      alert("Please input a value greater than zero for inhale and exhale timers.");
      return;
    }
  
  // Reset cycle
  phaseIndexRef.current = 0;
  setIsBreathing(true);
  setHold(false);

  // Clear existing interval if any
  if (intervalRef.current) clearInterval(intervalRef.current);

  // Start first phase immediately
  const phase = breathingPhases[phaseIndexRef.current];
  setBreathPhase(phase.name);
  setTimeLeft(phase.duration);
  };
  
  
  // Function to stop the session 
  const stopBreathing = () => {
    setIsBreathing(false);
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  };
  
  
   // Pause/Resume current phase
   const toggleHold = () => {
    if (hold) {
      setHold(false);
    } else {
      setHold(true);
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    }
  };

  // Manage the countdown and phase transitions
  useEffect(() => {
    if (!isBreathing || hold) return;
  
    intervalRef.current = setInterval(() => {
      setTimeLeft((prevTime) => {
        
        if (prevTime <= 1) {
            // Move to the next phase
            phaseIndexRef.current = (phaseIndexRef.current + 1) % breathingPhases.length;

            const next = breathingPhases[phaseIndexRef.current];

            setBreathPhase(next.name);

            return next.duration;
              }
  
        return prevTime - 1;
      });
    }, 1000);
  
    return () => clearInterval(intervalRef.current);
  }, [isBreathing, hold, breathingPhases]);
  

return {
    breathPhase,
    timeLeft,
    isBreathing,
    startBreathing,
    stopBreathing,
    toggleHold,
    hold
};
    
};