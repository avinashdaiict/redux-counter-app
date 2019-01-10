/**
 * Code Author : Avinash
 * Date : 10/01/19
 */
import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Button from '../../atoms/button';

class CounterApp extends Component {

  renderPlusButton(onAdd) {
    return (<Button
      label={"Add"}
      onClick={onAdd}
    />)
  }

  renderSubtractButton(onSubtract) {
    return (<Button
      label={"Subtract"}
      onClick={onSubtract}
    />)
  }

  renderCounterValue(counterValue) {
    return (
      <div
        className="counter-value"
      >{counterValue}
      </div>)
  }

  render() {
    const { counterValue, onAdd, onSubtract } = this.props;
    return (<div>
        {this.renderPlusButton(onAdd)}
        {this.renderSubtractButton(onSubtract)}
        {this.renderCounterValue(counterValue)}
      </div>
    )
  }
}

CounterApp.propTypes = {
  counterValue: PropTypes.number,
  onAdd: PropTypes.func,
  onSubtract: PropTypes.func,
};

export default CounterApp;
