import Banner from './components/Banner';
import Card from './components/Card';
import Footer from './components/Footer';
import Header from './components/Header';
import styles from './styles/components/app.module.scss';

function App() {


  return (
      <main className={styles.app__container}>
        <Header />
        <Banner />
        <Card />
        <Footer />
      </main>

  )
}

export default App
