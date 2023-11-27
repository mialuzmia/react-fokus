import styles from "../styles/components/timer.module.scss";

import  Countdown  from 'react-countdown';


const Timer = ({ mode, onComplete }) => {
  return (
    <div className={styles.timer__container}>
      <Countdown
        date={Date.now() + (mode === 'focus' ? 25 * 60 * 1000 : mode === 'short' ? 5 * 60 * 1000 : 15 * 60 * 1000)}
        onComplete={onComplete}

        renderer={({ minutes, seconds, completed }) => {
          if (completed) {
            onComplete();
            return <span>00:00</span>;
          } else {
           
            return (
              <span>
                {String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
              </span>
            );
          }
        }}

      />

    </div>

  )
}

export default Timer