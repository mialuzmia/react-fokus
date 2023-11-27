import { createContext, useContext, useState } from 'react';

import useSound from "use-sound";

import music from "../assets/sons/luna-rise-part-one.mp3";

const MusicPlayerContext = createContext();


export const MusicPlayerProvider = ({ children }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [play, { stop }] = useSound(music, { loop: true });

  const handleTogglePlay = () => {
    if (isPlaying) {
      stop();
    } else {
      play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <MusicPlayerContext.Provider value={{ isPlaying, handleTogglePlay }}>
      {children}
    </MusicPlayerContext.Provider>
  );
}
const useMusicPlayer = () => useContext(MusicPlayerContext);

export default useMusicPlayer