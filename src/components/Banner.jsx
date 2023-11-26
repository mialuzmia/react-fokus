import styles from '../styles/components/banner.module.scss';

import bannerImg from "../assets/imagens/foco.png";

const Banner = () => {
  return (
    <section className={styles.banner__container}>
      <h1 >
        Otimize sua produtividade,<br/>
        <strong>mergulhe no que importa.</strong>
      </h1>
  
      <img src={bannerImg} alt="" />
  
    </section>
  )
}

export default Banner