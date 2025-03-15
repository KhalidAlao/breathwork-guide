import React from 'react'; 
import React from './Timer.css'


const Timer = ({ timeLeft, phase }) => {
    return (
      <div style={{ margin: '1rem' }}>
        <h2>{phase.charAt(0).toUpperCase() + phase.slice(1)} Time: {timeLeft}s</h2>
      </div>
    );
  };
  

export default Timer;