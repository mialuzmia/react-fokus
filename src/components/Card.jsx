import styles from '../styles/components/card.module.scss';
import play from '../assets/imagens/play_arrow.png'

import { useState } from 'react';
import { useEffect } from 'react';
import useMode from '../context/ModeContext';

const Card = () => {
  const [activeButtonIndex, setActiveButtonIndex] = useState(0);
  const [isChecked, setIsChecked] = useState(false);

  const { mode, changeMode} = useMode();

  const handleClick = () => {
    setIsChecked(!isChecked);
  
  }
  
  useEffect(() => {
    console.log(mode);
    
  }, [mode]);

  const handleButtonClick = (index) => {
    setActiveButtonIndex(index);

    switch (index) {
      case 0:
        // setPomodoroTime(25);
        changeMode('focus');
        break;
      case 1:
        // setPomodoroTime(5);
        changeMode('short');
        break;
      case 2:
        // setPomodoroTime(15);
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
            onClick={() => handleButtonClick(index)}
          >
            {index === 0 ? 'Focus' : index === 1 ? 'Short Break' : 'Long Break'}
          </button>
        </li>
      ))}
          
        </ul>

        <div id="timer" className="app__card-timer"></div>

        <div className={styles.toggle__container}>
          <input type="checkbox" id="checkboxInput" onClick={handleClick} />
          <label htmlFor="checkboxInput" className="toggleSwitch"></label>
          <p>Música</p>
        </div>  

        <div className={styles.card__playButtonContainer}>
          <button>
            <img className="app__card-primary-butto-icon" src={play} alt="simbolo de play" />
            <span>Começar</span>
          </button>
        </div>

    </section>
  )
}

export default Card