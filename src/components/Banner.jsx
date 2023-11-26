import styles from '../styles/components/banner.module.scss';

import bannerImg from "../assets/imagens/foco.png";

const Banner = () => {
  return (
    <section class={styles.banner__container}>
      <h1 >
        Otimize sua produtividade,<br/>
        <strong class="app__title-strong">mergulhe no que importa.</strong>
      </h1>
  
      <img src={bannerImg} alt="" />
  
    </section>
  )
}

export default Banner