import styles from '../styles/components/card.module.scss';


import { useState } from 'react';
import { useEffect } from 'react';
import useMode from '../context/ModeContext';

import Timer from './Timer';

const Card = () => {

  const [activeButtonIndex, setActiveButtonIndex] = useState(0);
  const [completedPomos, setCompletedPomos] = useState(0);

  const { mode, changeMode} = useMode();

  useEffect(() => {
    console.log(completedPomos);
    
  }, [completedPomos]);

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

  const handleTimerEnd = () => {
    // Update the completed cycles after each focus cycle
    if (mode === 'focus') {
      setCompletedPomos((cycles) => cycles + 1);
    }

    // Determine the next mode based on completed cycles
    let nextModeIndex;

    if (activeButtonIndex === 1 || activeButtonIndex === 2){
     nextModeIndex = 0;
    }
    else if (activeButtonIndex === 0 && completedPomos < 2) {
      // If less than 2 cycles completed, go to short break
      nextModeIndex = 1; // short break
    } else {
      // If 2 cycles completed, go to long break and reset cycles
      nextModeIndex = 2; // long break
      setCompletedPomos(0);
    }

    handleModeButtonClick(nextModeIndex);
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
        onTimerEnd={handleTimerEnd}
  
      />     
    </section>
  )
}

export default Card