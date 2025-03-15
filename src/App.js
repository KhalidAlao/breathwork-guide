import React, { useState, useEffect, useRef } from 'react';
import BreathingCircle from './Components/BreathingCircle/BreathingCircle';
import Controls from './Components/Controls/Controls';
import Timer from './Components/Timer/Timer';

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
  const [inhaleTime, setInhaleTime] = useState(4);
  const [holdTime, setHoldTime] = useState(7);
  const [exhaleTime, setExhaleTime] = useState(8);









































































































































};



export default App;
