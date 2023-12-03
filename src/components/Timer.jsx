import styles from "../styles/components/timer.module.scss";
import play from '../assets/imagens/play_arrow.png'
import pause from '../assets/imagens/pause.png'

import useCountdownTimer from '../hooks/useCountdownTimer';
import MusicPlayer from "./MusicPlayer";

import { useEffect } from "react";


const Timer = ({ mode, onTimerEnd }) => {

  const timestamp = mode === 'focus' ? 45 : mode === 'short' ? 10 : 30;
  const { minutes, seconds, toggleTimer,isRunning } = useCountdownTimer(timestamp); 

  useEffect(() => {
    if (minutes === 0 && seconds === 0) {
      // Timer reached zero, handle mode change
      onTimerEnd();
    }
  }, [minutes, seconds, onTimerEnd]);

  return (
    <div className={styles.timer__container}>
      <span>
        {minutes}:{seconds < 10 ? '0' : ''}{seconds}
      </span> 

      <MusicPlayer />

      <div className={styles.timer__playButtonContainer}>
          <button onClick={toggleTimer}>
            <img src={isRunning ? pause : play} alt="simbolo de play" />
            <span>{isRunning ? 'Pausar' : 'Começar'}</span>
          </button>
        </div>
    </div>

  )
}

export default Timer