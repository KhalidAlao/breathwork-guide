import React from 'react'; 
import styles from './Controls.module.css'


const Controls = ({ startBreathing, stopBreathing, toggleHold, isBreathing, hold }) => {
    return (
      <div className={styles.controlsContainer}>
        {!isBreathing ? (
          <button 
            className={styles.controlButton}
            onClick={startBreathing}
          >
            Begin Session
          </button>
        ) : (
          <div className={styles.buttonGroup}>
            <button
              className={styles.controlButton}
              onClick={toggleHold}
            >
              {hold ? 'Resume Flow' : 'Pause'}
            </button>
            <button
              className={`${styles.controlButton} ${styles.stopButton}`}
              onClick={stopBreathing}
            >
              Complete Session
            </button>
          </div>
        )}
      </div>
    );
  };
  

export default Controls;