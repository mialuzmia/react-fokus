import styles from "../styles/components/musicplayer.module.scss"


import useMusicPlayer from "../context/MusicPlayerContext";
import { useEffect } from "react";



const MusicPlayer = () => {  
  const { isPlaying, handleTogglePlay } = useMusicPlayer();
 
  // useEffect(() => {
  //   console.log(isPlaying);
    
  // }, [isPlaying]);
  

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