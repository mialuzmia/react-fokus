import styles from '../styles/components/header.module.scss';
import logo from '../assets/imagens/logo.png';


const Header = () => {
  return (
    <header className={styles.header__container}>
      <img src={logo} alt="logo escrita fokus" />
    </header>
  )
}

export default Header