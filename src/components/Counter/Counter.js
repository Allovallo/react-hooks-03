import React, { Component } from 'react';
import styles from './Counter.module.css';

export default class OldCounter extends Component {
  state = {
    counterA: 0,
    counterB: 0,
  };

  render() {
    return (
      <>
        <button type="button" className={styles.btn}>
          Клікнули counterA {this.state.counterA} разів
        </button>
        <button type="button" className={styles.btn}>
          Клікнули counterB {this.state.counterB} разів
        </button>
      </>
    );
  }
}
