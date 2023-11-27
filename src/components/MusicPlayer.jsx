import styles from "../styles/components/musicplayer.module.scss"

import useSound from "use-sound";

import music from "../assets/sons/luna-rise-part-one.mp3";
import { useEffect, useState } from "react";


const MusicPlayer = () => {  
  const [isPlaying, setIsPlaying] = useState(false);
  const [play, { stop }] = useSound(music, { loop: true });

  const handleTogglePlay = () => {
    if (isPlaying) {
      stop();
    } else {
      play();
    }
    setIsPlaying((prevState) => !prevState);
  };

  useEffect(() => {
    console.log(isPlaying);
    
  }, [isPlaying]);
  

  return (
    <div className={styles.toggle__container}>

      <input 
      type="checkbox" 
      id="checkboxInput"  
      checked={isPlaying}
      onChange={handleTogglePlay}
      />

      <label htmlFor="checkboxInput" className="toggleSwitch"></label>
      <p>Música</p>
    </div>  
  )
}

export default MusicPlayer