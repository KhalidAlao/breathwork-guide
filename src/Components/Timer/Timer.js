import React from 'react'; 
import styles from './Timer.module.css'


const Timer = ({ timeLeft, phase }) => (
    <div className={styles.timer} aria-live="polite" role="status">
      <h3>{phase.toUpperCase()}</h3>
      <div className={styles.time}>{timeLeft}s</div>
    </div>
  );
  

export default Timer;