import styles from "../styles/components/timer.module.scss";
import play from '../assets/imagens/play_arrow.png'
import pause from '../assets/imagens/pause.png'


import useCountdownTimer from '../hooks/useCountdownTimer';
import MusicPlayer from "./MusicPlayer";


const Timer = ({ mode }) => {

  const timestamp = mode === 'focus' ? 25 * 60: mode === 'short' ? 5 * 60 : 15 * 60;


  const { minutes, seconds, toggleTimer,isRunning } = useCountdownTimer(timestamp); 
  return (
    <div className={styles.timer__container}>
      <span>
        {minutes}:{seconds < 10 ? '0' : ''}{seconds}
      </span> 

      <MusicPlayer />

      {/* <button onClick={toggleTimer}>Start/Pause/Resume</button> */}

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