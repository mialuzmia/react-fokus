import styles from '../styles/components/card.module.scss';
import play from '../assets/imagens/play_arrow.png'

import { useState } from 'react';
import { useEffect } from 'react';
import useMode from '../context/ModeContext';

import Timer from './Timer';
import MusicPlayer from './MusicPlayer';
import useCountdownTimer from '../hooks/useCountdownTimer';

const Card = () => {


  const [activeButtonIndex, setActiveButtonIndex] = useState(0);
  const [isTimerRunning, setIsTimerRunning] = useState(false); 

  const { mode, changeMode} = useMode();

  useEffect(() => {
    console.log(mode);
    
  }, [mode]);

  const handleModeButtonClick = (index) => {
    setActiveButtonIndex(index);

    switch (index) {
      case 0:
        changeMode('focus');
        break;
      case 1:
        changeMode('short');
        break;
      case 2:
        changeMode('long');
        break;
      default:
        break;
    }
  };



  return (
    <section className={styles.card__container}>
      
      <ul className={styles.card__buttonsList}>

       {[0, 1, 2].map((index) => (
        <li className={index === activeButtonIndex ? 'active' : ''} key={index}>
          <button
            onClick={() => handleModeButtonClick(index)}
          >
            {index === 0 ? 'Foco' : index === 1 ? 'Descanso curto' : 'Descanso longo'}
          </button>
        </li>
        ))}
          
      </ul>

      <Timer 
        mode={mode}
        key={mode}
  
      />

      {/* <MusicPlayer /> */}

       

       
    </section>
  )
}

export default Card