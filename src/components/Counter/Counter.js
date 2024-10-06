import { useState, useEffect } from 'react';
import styles from './Counter.module.css';

export default function OldCounter() {
  const [counterA, setCounterA] = useState(0);
  const [counterB, setCounterB] = useState(0);

  const handleCounterAIncrement = () => {
    setCounterA(prevState => prevState + 1);
  };

  const handleCounterBIncrement = () => {
    setCounterB(prevState => prevState + 1);
  };

  useEffect(() => {
    const totalClicks = counterA + counterB;
    document.title = `Всього клікнули ${totalClicks} разів`;
  }, [counterA, counterB]);

  return (
    <>
      <button type="button" className={styles.btn} onClick={handleCounterAIncrement}>
        Клікнули counterA {counterA} разів
      </button>
      <button type="button" className={styles.btn} onClick={handleCounterBIncrement}>
        Клікнули counterB {counterB} разів
      </button>
    </>
  );
}
