import { useState } from 'react';
import styles from './ColorPicker.module.css';

export default function OldColorPicker({ options }) {
  const [activeOptionIdx, setActiveOptionIdx] = useState(0);

  const makeOptionClassName = index => {
    return index === activeOptionIdx ? styles.activeOption : styles.option;
  };

  const { label } = options[activeOptionIdx];

  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Color Picker</h2>
      <p>Обрано кольор: {label}</p>
      <div>
        {options.map(({ label, color }, index) => (
          <button
            key={label}
            aria-label={label}
            className={makeOptionClassName(index)}
            style={{ backgroundColor: color }}
            onClick={() => setActiveOptionIdx(index)}
          ></button>
        ))}
      </div>
    </div>
  );
}
