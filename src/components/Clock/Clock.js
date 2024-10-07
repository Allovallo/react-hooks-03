import { useState, useEffect, useRef } from 'react';
import styles from './Clock.module.css';

export default function Clock() {
  const [time, setTime] = useState(() => new Date());

  const intervalId = useRef(null);

  useEffect(() => {
    intervalId.current = setInterval(() => {
      console.log('Це інтервал кожні 1000 мс ' + Date.now());
      setTime(new Date());
    }, 1000);

    return () => {
      console.log('Це функція очищення перед наступним визовом useEffect');
      stop();
    };
  }, []);

  const stop = () => {
    clearInterval(intervalId.current);
  };

  console.log(intervalId);

  return (
    <div className={styles.container}>
      <button onClick={() => setTime(new Date())}>Оновити стейт time</button>
      <p className={styles.clockface}>Поточний час: {time.toLocaleString()}</p>
      <button type="button" onClick={stop}>
        Зупинити
      </button>
    </div>
  );
}
