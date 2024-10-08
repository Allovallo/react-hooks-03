import { useState } from 'react';
import styles from './Counter-2.module.css';

export default function Counter2() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>{count}</p>
      <button className={styles.btn} type="button" onClick={() => setCount(state => state + 1)}>
        Збільшити
      </button>
      <button className={styles.btn} type="button" onClick={() => setCount(state => state - 1)}>
        Зменшити
      </button>
    </div>
  );
}
