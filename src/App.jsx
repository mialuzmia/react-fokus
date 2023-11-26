import Banner from './components/Banner';
import Header from './components/Header';
import styles from './styles/components/app.module.scss';

function App() {


  return (
      <main className={styles.app__container}>
        <Header />
        <Banner />
      </main>

  )
}

export default App
