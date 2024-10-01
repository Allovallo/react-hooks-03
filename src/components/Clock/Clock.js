import React, { Component } from 'react';
import styles from './Clock.module.css';

export default class OldClock extends Component {
  state = {
    time: new Date(),
  };

  intervalId = null;

  componentDidMount() {
    this.intervalId = setInterval(() => {
      this.setState({ time: new Date() });
    }, 1000);
  }

  componentWillUnmount() {
    this.stop();
  }

  stop = () => {
    clearInterval(this.intervalId);
  };

  render() {
    return (
      <div className={styles.container}>
        <p className={styles.clockface}>Поточний час: {this.state.time.toLocaleString()}</p>
        <button type="button" onClick={this.stop}>
          Зупинити
        </button>
      </div>
    );
  }
}
