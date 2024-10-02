import React, { Component } from 'react';
import styles from './ColorPicker.module.css';

export default class OldColorPicker extends Component {
  state = {
    activeOptionIdx: 0,
  };

  setActiveIdx = index => {
    this.setState({ activeOptionIdx: index });
  };

  makeOptionClassName = index => {
    return index === this.state.activeOptionIdx ? styles.activeOption : styles.option;
  };

  render() {
    const { activeOptionIdx } = this.state;
    const { options } = this.props;
    //   this.props.options[this.state.activeOptionIdx]     (label)
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
              className={this.makeOptionClassName(index)}
              style={{ backgroundColor: color }}
              onClick={() => this.setActiveIdx(index)}
            ></button>
          ))}
        </div>
      </div>
    );
  }
}
