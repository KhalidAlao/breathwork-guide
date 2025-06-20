import React from 'react'; 
import styles from './Controls.module.css'


const Controls = ({ startBreathing, stopBreathing, toggleHold, isBreathing, hold }) => {
    return (
      <div className={styles.controlsContainer}>
        {!isBreathing ? (
          <button 
            aria-label="Begin breathwork session"
            className={styles.controlButton}
            onClick={startBreathing}
          >
            Begin Session
          </button>
        ) : (
          <div className={styles.buttonGroup}>
            <button
              aria-label="Pause / Resume breathwork session"
              className={styles.controlButton}
              onClick={toggleHold}
            >
              {hold ? 'Resume Flow' : 'Pause'}
            </button>
            <button
              aria-label="End breathwork session"
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