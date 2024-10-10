import { useReducer } from 'react';
import styles from './Counter-2.module.css';

function countReducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { ...state, count: state.count + action.payload };
    case 'decrement':
      return { ...state, count: state.count - action.payload };

    default:
      throw new Error(`Unsupportable action type ${action.type}`);
  }
}

function init(initialState) {
  return {
    ...initialState,
    count: initialState.count + 100,
  };
}

export default function Counter2() {
  // const [count, setCount] = useState(0);
  const [state, dispatch] = useReducer(
    countReducer,
    {
      count: 0,
    },
    init
  );

  return (
    <div>
      <p>{state.count}</p>
      <button
        className={styles.btn}
        type="button"
        onClick={() => dispatch({ type: 'increment', payload: 1 })}
      >
        Збільшити
      </button>
      <button
        className={styles.btn}
        type="button"
        onClick={() => dispatch({ type: 'decrement', payload: 1 })}
      >
        Зменшити
      </button>
    </div>
  );
}
