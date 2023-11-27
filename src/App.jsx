import styles from './styles/components/app.module.scss';
import { MusicPlayerProvider } from './context/MusicPlayerContext';

import Banner from './components/Banner';
import Card from './components/Card';
import Footer from './components/Footer';
import Header from './components/Header';

function App() {


  return (
      <main className={styles.app__container}>
        <Header />
        <Banner />
        <MusicPlayerProvider>
          <Card />
        </MusicPlayerProvider>
        <Footer />
      </main>

  )
}

export default App
