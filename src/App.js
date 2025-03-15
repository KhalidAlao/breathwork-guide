import React, { useState, useEffect, useRef, useMemo } from 'react';
import BreathingCircle from './Components/BreathingCircle/BreathingCircle';
import Controls from './Components/Controls/Controls';
import Timer from './Components/Timer/Timer';
import './App.css';

const App = () => {
// State to track if the user's breathing session is active
const [isBreathing, setIsBreathing] = useState(false);

// Current breathing phase
const [breathPhase, setBreathPhase] = useState('inhale');

// Hold state to pause/ resume without resetting phase
const [hold, setHold] = useState(false);

// Countdown timer for the current phase
const [timeLeft, setTimeLeft] = useState(0);


// Durations in seconds for the 4-7-8 breathing method
  const [inhaleTime] = useState(4);
  const [holdTime] = useState(7);
  const [exhaleTime] = useState(8);


// Sequence of phases
const phases = useMemo(() => [
  { phase: 'inhale', duration: inhaleTime },
  { phase: 'hold', duration: holdTime },
  { phase: 'exhale', duration: exhaleTime },
], [inhaleTime, holdTime, exhaleTime]);


    // Reference to track the current phase index in the cycle
    const phaseIndexRef = useRef(0);
    // Reference to the timer interval
    const intervalRef = useRef(null);


// Function to start the breathing session
const startBreathing = () => {
  // Ensure that breathing times are greater than zero
  if (inhaleTime <= 0) {
    alert("Please input a value greater than zero for the breathe in timer.");
    return;
  }
  if (exhaleTime <= 0) {
    alert("Please input a value greater than zero for the breathe out timer.");
    return;
  }


  setIsBreathing(true);
  // Start at the first phase
  phaseIndexRef.current = 0;
  setBreathPhase(phases[phaseIndexRef.current].phase);
  setTimeLeft(phases[phaseIndexRef.current].duration);
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
        // Move to the next phase in order
        if (breathPhase === "inhale") {
          setBreathPhase("hold");
          setTimeLeft(holdTime);
        } else if (breathPhase === "hold") {
          setBreathPhase("exhale");
          setTimeLeft(exhaleTime);
        } else {
          // After exhale, restart the cycle with inhale
          setBreathPhase("inhale");
          setTimeLeft(inhaleTime);
        }
        return 0; // Reset previous phase timer
      }
      return prevTime - 1;
    });
  }, 1000);

  return () => clearInterval(intervalRef.current);
}, [isBreathing, hold, breathPhase, inhaleTime, holdTime, exhaleTime]);

return (
  <div className="appContainer">
    <h1 className="appTitle">Breath Work Guide</h1>
    <BreathingCircle 
      isBreathing={isBreathing} 
      breathPhase={breathPhase} 
      timeLeft={timeLeft} 
    />
    <Timer timeLeft={timeLeft} phase={breathPhase} />
    <Controls 
      startBreathing={startBreathing} 
      stopBreathing={stopBreathing} 
      toggleHold={toggleHold}
      isBreathing={isBreathing}
      hold={hold}
    />
  </div>
);
};


export default App;
