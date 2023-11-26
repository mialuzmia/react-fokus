import styles from '../styles/components/card.module.scss';
import play from '../assets/imagens/play_arrow.png'

import { useState } from 'react';
import { useEffect } from 'react';

const Card = () => {

  const [isChecked, setIsChecked] = useState(false);

  const handleClick = () => {
    setIsChecked(!isChecked);
    // console.log(isChecked);
  }

  useEffect(() => {
    console.log(isChecked);

  
    
  }, [isChecked]);

  return (
    <section className={styles.card__container}>
      
       <ul className={styles.card__buttonsList}>
          <li className={styles.active}>
              <button  type='button'>Foco</button>
          </li>
          <li >
              <button type='button'>Descanso curto</button>
          </li>
          <li>
              <button type='button'>Descanso longo</button>
          </li>
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