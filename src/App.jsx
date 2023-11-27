import styles from './styles/components/app.module.scss';
import { MusicPlayerProvider } from './context/MusicPlayerContext';

import Banner from './components/Banner';
import Card from './components/Card';
import Footer from './components/Footer';
import Header from './components/Header';
import useMode from './context/ModeContext';

function App() {
  const { mode } = useMode();

  return (
      <main 
        className={`${styles.app__container} 
        ${mode === 'focus' ? styles.focus : mode === 'short' ? styles.short : styles.long}`}
      >
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
