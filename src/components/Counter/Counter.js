import React, { Component } from 'react';
import styles from './Counter.module.css';

export default class OldCounter extends Component {
  state = {
    counterA: 0,
    counterB: 0,
  };

  handleCounterAIncrement = () => {
    this.setState(({ counterA }) => ({ counterA: counterA + 1 }));
  };

  handleCounterBIncrement = () => {
    this.setState(({ counterB }) => ({ counterB: counterB + 1 }));
  };

  componentDidMount() {
    document.title = `Всього клікнули ${this.state.counterA + this.state.counterB} разів`;
  }

  componentDidUpdate(prevProps, prevState) {
    // const { counterA, counterB } = this.state;

    if (prevState.counterA !== this.state.counterA || prevState.counterB !== this.state.counterB) {
      document.title = `Всього клікнули ${this.state.counterA + this.state.counterB} разів`;
    }
  }

  render() {
    return (
      <>
        <button type="button" className={styles.btn} onClick={this.handleCounterAIncrement}>
          Клікнули counterA {this.state.counterA} разів
        </button>
        <button type="button" className={styles.btn} onClick={this.handleCounterBIncrement}>
          Клікнули counterB {this.state.counterB} разів
        </button>
      </>
    );
  }
}
