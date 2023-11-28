import styles from '../styles/components/footer.module.scss';

const Footer = () => {
  return (
    <div className={styles.footer__container}>
       <p>Projeto fictício e sem fins comerciais. Imagens geradas por IA no Adobe Firefly.</p>
        <p>Design por Alura. Desenvolvido por Mia Luz.</p>
    </div>
  );
}

export default Footer