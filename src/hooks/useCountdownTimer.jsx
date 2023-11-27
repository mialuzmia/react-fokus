import { useEffect, useRef, useState } from 'react';

const useCountdownTimer = (timestamp) => {
  const [timeLeft, setTimeLeft] = useState(timestamp);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef(null);

  const toggleTimer = () => {
    if (isRunning) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    } else if (timeLeft > 0) {
      intervalRef.current = setInterval(() => {
        setTimeLeft((time) => time - 1);
      }, 1000);
    }
    setIsRunning(!isRunning);
  };

  useEffect(() => {
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  useEffect(() => {
    if (timeLeft <= 0 && intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
      setIsRunning(false);
    }
  }, [timeLeft]);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return { minutes, seconds, toggleTimer, isRunning };
};

export default useCountdownTimer;
