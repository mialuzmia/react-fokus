import styles from '../styles/components/banner.module.scss';

import imgFocus from '../assets/imagens/foco.png';
import imgShort from '../assets/imagens/descanso-curto.png';
import imgLong from '../assets/imagens/descanso-longo.png';

import useMode from '../context/ModeContext';

const Banner = () => {
   const { mode } =  useMode();

  return (
    <section className={styles.banner__container}>

      {mode === 'focus' && 
        <>
          <h1 >
            Otimize sua produtividade,<br/>
            <strong>mergulhe no que importa.</strong>
          </h1>
          <img src={imgFocus} alt="imagem em tons de roxo de um homem de costas de fones de ouvido e mochila" />
        </> 
      }

      {mode === 'short' && 
        <>
          <h1 >
            Que tal dar uma respirada?<br/>
            <strong>Faça uma pausa curta!</strong>
          </h1>
          <img src={imgShort} alt="imagem em tons de verde de uma mulher de perfil com cabelo em uma trança para trás e com fones de ouvido" />
        </>
      }

      {mode === 'long' && 
        <>
          <h1 >
            Hora de voltar à superfície.<br/>
            <strong>Faça uma pausa longa.</strong>
          </h1>
          <img src={imgLong} alt="imagem em tons de azul de uma menina com óculos grandes, cabelo com mechas cor de rosa para trás e fones de ouvido" />
        </>
      }
  
    </section>
  )
}

export default Banner