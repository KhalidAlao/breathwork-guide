import React from 'react'; 
import styles from './Controls.css'


const Controls = ({ startBreathing, stopBreathing, toggleHold, isBreathing, hold }) => {
    return (
      <div>
        {!isBreathing ? (
          <button onClick={startBreathing}>Start</button>
        ) : (
          <>
            <button onClick={toggleHold}>{hold ? 'Resume' : 'Pause'}</button>
            <button onClick={stopBreathing}>Stop</button>
          </>
        )}
      </div>
    );
  };
  

export default Controls;