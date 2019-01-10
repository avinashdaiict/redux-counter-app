/**
 * Code Author : Avinash
 * Date : 10/01/19
 */
import React, { Component } from 'react';
import { connect } from 'react-redux'

//views
import Counter from '../../components/molecules/counter';


//constants
import actionTypes from '../../actions/counterActions';

class CounterApp extends Component {

  render() {
    const { counter, onAdd, onSubtract } = this.props;
    return (<Counter
      counterValue={counter}
      onAdd={onAdd}
      onSubtract={onSubtract}

    />)
  }
}

const mapStateToProps = ({ counter }) => {
  return {
    counter,
  }
};

const mapDispatchToProps = dispatch => {
  return {
    onAdd: () =>
      dispatch({
        type: actionTypes.ADD_TO_COUNTER
      }),
    onSubtract: () =>
      dispatch({
        type: actionTypes.SUBTRACT_FROM_COUNTER
      }),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(CounterApp);

